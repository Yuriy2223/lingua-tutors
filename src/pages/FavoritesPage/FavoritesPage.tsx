import React, { useState, useEffect } from 'react';
import {
  LoadMoreButton,
  LoadMoreButtonContainer,
  TeachersList,
  TeachersPageContainer,
  NoTeachersMessage,
} from '../TeachersPage/TeachersPage.styled';
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

  interface Teacher {
    id: string;
    name: string;
    surname: string;
    languages: string[];
    levels: string[];
    rating: number;
    reviews: {
      reviewer_name: string;
      reviewer_rating: number;
      comment: string;
    }[];
    price_per_hour: number;
    lessons_done: number;
    avatar_url: string;
    lesson_info: string;
    conditions: string[];
    experience: string;
  }
  const [favoriteTeachers, setFavoriteTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const fetchFavoriteTeachers = async () => {
      if (isAuthenticated && user) {
        try {
          const favoritesRef = collection(db, 'users', user.uid, 'favorites');
          const snapshot = await getDocs(favoritesRef);
          const favoritesList = await Promise.all(
            snapshot.docs.map(async doc => {
              const teacherDocRef = doc.data();
              return { id: doc.id, ...teacherDocRef } as Teacher;
            })
          );
          setFavoriteTeachers(favoritesList);
        } catch (error) {
          console.error('Error fetching favorite teachers:', error);
          toast.error('Failed to load favorite teachers.');
        }
      }
    };

    fetchFavoriteTeachers();
  }, [isAuthenticated, user]);

  const handleToggleFavorite = async (teacherId: string) => {
    if (!isAuthenticated) {
      toast.error('This functionality is only available to authorized users.');
      return;
    }

    const updatedFavorites = favoriteTeachers.filter(
      teacher => teacher.id !== teacherId
    );

    setFavoriteTeachers(updatedFavorites);

    try {
      const favoritesRef = collection(db, 'users', user!.uid, 'favorites');
      const teacherDocRef = doc(favoritesRef, teacherId);

      if (updatedFavorites.length < favoriteTeachers.length) {
        await deleteDoc(teacherDocRef);
        toast.success(`Teacher removed from favorites.`);
      } else {
        await setDoc(teacherDocRef, { id: teacherId });
        toast.success(`Teacher added to favorites.`);
      }
    } catch (error) {
      toast.error('Error occurred while updating favorites.');
      console.error('Error updating favorite:', error);
    }
  };

  const handleLoadMore = () => {
    setPageIndex(prevIndex => prevIndex + 1);
  };

  const startIndex = pageIndex * 4;
  const visibleTeachers = favoriteTeachers.slice(startIndex, startIndex + 4);

  return (
    <div>
      <TeachersPageContainer>
        <TeachersList>
          {visibleTeachers.length > 0 ? (
            visibleTeachers.map(teacher => (
              <li key={teacher.id}>
                <TeacherCard
                  teacher={teacher}
                  levelFilter=""
                  onToggleFavorite={() => handleToggleFavorite(teacher.id)}
                  isFavorite={true} 
                />
              </li>
            ))
          ) : (
            <NoTeachersMessage>
              Your favorite teachers were not found. Try adding ;).
            </NoTeachersMessage>
          )}
        </TeachersList>

        {startIndex + 4 < favoriteTeachers.length && (
          <LoadMoreButtonContainer>
            <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
          </LoadMoreButtonContainer>
        )}
      </TeachersPageContainer>
    </div>
  );
};
