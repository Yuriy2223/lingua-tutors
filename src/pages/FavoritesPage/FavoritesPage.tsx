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
import { get, ref, set, remove } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

export const FavoritesPage: React.FC = () => {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const [pageIndex, setPageIndex] = useState(0);
  const [favoriteTeachers, setFavoriteTeachers] = useState<Teacher[]>([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/teachers');
      return;
    }

    const fetchFavoriteTeachers = async () => {
      try {
        const favoritesRef = ref(db, `users/${user.uid}/favorites`);
        const snapshot = await get(favoritesRef);

        if (snapshot.exists()) {
          const favoritesList = Object.values(
            snapshot.val() as { [key: string]: Teacher }
          ).map(teacher => ({
            id: teacher.id,
            name: teacher.name,
            surname: teacher.surname,
            languages: teacher.languages,
            levels: teacher.levels,
            rating: teacher.rating,
            reviews: teacher.reviews,
            price_per_hour: teacher.price_per_hour,
            lessons_done: teacher.lessons_done,
            avatar_url: teacher.avatar_url,
            lesson_info: teacher.lesson_info,
            conditions: teacher.conditions,
            experience: teacher.experience,
          }));

          setFavoriteTeachers(favoritesList);
        } else {
          console.log('No favorite teachers found.');
        }
      } catch (error) {
        console.error('Error fetching favorite teachers:', error);
        toast.error('Failed to load favorite teachers.');
      }
    };

    fetchFavoriteTeachers();
  }, [isAuthenticated, user, navigate]);

  const handleToggleFavorite = async (teacherId: string) => {
    if (!isAuthenticated) {
      toast.error('This functionality is only available to authorized users.');
      return;
    }

    const updatedFavorites = favoriteTeachers.filter(
      teacher => teacher.id !== teacherId
    );

    try {
      const favoritesRef = ref(db, `users/${user!.uid}/favorites/${teacherId}`);
      if (updatedFavorites.length < favoriteTeachers.length) {
        await remove(favoritesRef);
        toast.success(`Teacher removed from favorites.`);
      } else {
        await set(favoritesRef, { id: teacherId });
        toast.success(`Teacher added to favorites.`);
      }

      setFavoriteTeachers(updatedFavorites);
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
  );
};
