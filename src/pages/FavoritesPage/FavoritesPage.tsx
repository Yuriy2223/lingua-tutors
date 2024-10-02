import React, { useState, useEffect } from 'react';
import {
  LoadMoreButton,
  LoadMoreButtonContainer,
  TeachersList,
  TeachersPageContainer,
  NoTeachersMessage,
} from '../TeachersPage/TeachersPage.styled';
import { teachersData } from '../../components/TeacherCard/teachersData';
import { TeacherCard } from '../../components/TeacherCard/TeacherCard';
import { toast } from 'react-toastify';
import { useAuth } from '../../services/authContext';
import { db } from '../../services/firebase';
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';

export const FavoritesPage: React.FC = () => {
  const { user } = useAuth();
  const isAuthenticated = !!user;

  const [pageIndex, setPageIndex] = useState(0);
  const [favoriteTeachers, setFavoriteTeachers] = useState<string[]>([]);

  useEffect(() => {
    const fetchFavoriteTeachers = async () => {
      if (isAuthenticated && user) {
        try {
          const favoritesRef = collection(db, 'users', user.uid, 'favorites');
          const snapshot = await getDocs(favoritesRef);
          const favoritesList = snapshot.docs.map(doc => doc.id);
          setFavoriteTeachers(favoritesList);
        } catch (error) {
          console.error('Error fetching favorite teachers:', error);
          toast.error('Failed to load favorite teachers.');
        }
      }
    };

    fetchFavoriteTeachers();
  }, [isAuthenticated, user]);

  const handleToggleFavorite = async (teacherName: string) => {
    if (!isAuthenticated) {
      toast.error('This functionality is only available to authorized users.');
      return;
    }

    const updatedFavorites = favoriteTeachers.includes(teacherName)
      ? favoriteTeachers.filter(name => name !== teacherName)
      : [...favoriteTeachers, teacherName];

    setFavoriteTeachers(updatedFavorites);

    try {
      const favoritesRef = collection(db, 'users', user!.uid, 'favorites');
      const teacherDocRef = doc(favoritesRef, teacherName);

      if (favoriteTeachers.includes(teacherName)) {
        await deleteDoc(teacherDocRef);
        toast.success(`${teacherName} removed from favorites.`);
      } else {
        await setDoc(teacherDocRef, { name: teacherName });
        toast.success(`${teacherName} added to favorites.`);
      }
    } catch (error) {
      toast.error('Error occurred while updating favorites.');
      console.error('Error updating favorite:', error);
    }
  };

  const filteredTeachers = teachersData.filter(teacher =>
    favoriteTeachers.includes(teacher.name)
  );

  const handleLoadMore = () => {
    setPageIndex(prevIndex => prevIndex + 1);
  };

  const startIndex = pageIndex * 4;
  const visibleTeachers = filteredTeachers.slice(startIndex, startIndex + 4);

  return (
    <div>
      <TeachersPageContainer>
        <TeachersList>
          {visibleTeachers.length > 0 ? (
            visibleTeachers.map((teacher, index) => (
              <li key={`${teacher.name}-${teacher.surname}-${index}`}>
                <TeacherCard
                  teacher={teacher}
                  levelFilter=""
                  onToggleFavorite={() => handleToggleFavorite(teacher.name)}
                  isFavorite={favoriteTeachers.includes(teacher.name)}
                />
              </li>
            ))
          ) : (
            <NoTeachersMessage>
              Your favorite teachers were not found. Try adding ;).
            </NoTeachersMessage>
          )}
        </TeachersList>

        {startIndex + 4 < filteredTeachers.length && (
          <LoadMoreButtonContainer>
            <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
          </LoadMoreButtonContainer>
        )}
      </TeachersPageContainer>
    </div>
  );
};
