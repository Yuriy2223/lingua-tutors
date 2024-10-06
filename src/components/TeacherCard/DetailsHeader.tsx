import React from 'react';
import {
  IconsBooks,
  IconsStar,
  IconHeart,
  InfoWrapper,
  InfoWrapperUl,
  InfoText,
  InfoTextSpan,
  DetailsHeaderWrapper,
  ButtonFavorite,
} from './TeacherCard.styles';
import { toast } from 'react-toastify';
import { ref, set, remove } from 'firebase/database';
import { db } from '../../services/firebase';
import { useAuth } from '../../services/authContext';

interface Teacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}
interface DetailsHeaderProps {
  teacher: Teacher;
  isFavorite: boolean;
  onToggleFavorite: (teacherId: string, isFavorite: boolean) => void;
}

export const DetailsHeader: React.FC<DetailsHeaderProps> = ({
  teacher,
  isFavorite,
  onToggleFavorite,
}) => {
  const { user } = useAuth();
  const handleToggleFavorite = async () => {
    if (!user) {
      toast.info('This functionality is only available to authorized users.');
      return;
    }

    onToggleFavorite(teacher.id, !isFavorite);

    const favoritesRef = ref(db, `users/${user.uid}/favorites/${teacher.id}`);
    try {
      if (isFavorite) {
        await remove(favoritesRef);
        toast.success(`${teacher.name} removed from favorites.`);
      } else {
        await set(favoritesRef, { ...teacher });
        toast.success(`${teacher.name} added to favorites.`);
      }
    } catch (error) {
      toast.error('Error occurred while updating favorites.');
      console.error('Error updating favorite:', error);
    }
  };

  return (
    <DetailsHeaderWrapper>
      <p>Languages</p>
      <InfoWrapper>
        <InfoWrapperUl>
          <li>
            <IconsBooks width={20} height={20} iconName="book" />
            <InfoText>
              Lessons:<InfoTextSpan>online</InfoTextSpan>
            </InfoText>
          </li>
          <li>
            <InfoText>Lessons done: {teacher.lessons_done}</InfoText>
          </li>
          <li>
            <IconsStar width={20} height={20} iconName="star" />
            <InfoText>
              Rating:{' '}
              {teacher.rating !== undefined ? teacher.rating.toFixed(1) : 'N/A'}
            </InfoText>
          </li>
          <li>
            <InfoText>
              Price / 1 hour:
              <InfoTextSpan>${teacher.price_per_hour}</InfoTextSpan>
            </InfoText>
          </li>
        </InfoWrapperUl>
        <ButtonFavorite type="button" onClick={handleToggleFavorite}>
          <IconHeart
            width={26}
            height={26}
            iconName="heart"
            className={isFavorite ? 'active' : ''}
          />
        </ButtonFavorite>
      </InfoWrapper>
    </DetailsHeaderWrapper>
  );
};
