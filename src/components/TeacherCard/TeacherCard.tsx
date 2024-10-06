import React, { useState } from 'react';
import { useModal } from '../Common/ModalContext';
import DefaultReviewerPhoto from '../../assets/imeges/defoltAvatar.webp';
import { DetailsHeader } from './DetailsHeader';
import { DetailsTeacherLevels } from './DetailsTeacherLevels';
import { DetailsReviews } from './DetailsReviews';
import { DetailsInfoTeacher } from './DetailsInfoTeacher';
import {
  TeacherCardContainer,
  TeacherImgIcon,
  TeacherImgWrapper,
  TeacherName,
  TeacherBtn,
  BookTrialButton,
  TeacherDetailsContainer,
} from './TeacherCard.styles';

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface Teacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: Review[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}

interface TeacherCardProps {
  teacher: Teacher;
  levelFilter: string;
  onToggleFavorite: (teacherId: string, isFavorite: boolean) => void;
  isFavorite: boolean;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({
  teacher,
  levelFilter,
  onToggleFavorite,
  isFavorite,
}) => {
  const { openModal } = useModal();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  const handleBookTrial = () => {
    openModal('bookTrialLesson', {
      avatar_url: teacher.avatar_url,
      name: teacher.name,
      surname: teacher.surname,
      id: teacher.id,
    });
    setIsExpanded(false);
  };

  return (
    <TeacherCardContainer>
      <TeacherImgWrapper>
        <div>
          <TeacherImgIcon width={12} height={12} iconName="onlain" />
          <img src={teacher.avatar_url || DefaultReviewerPhoto} />
        </div>
      </TeacherImgWrapper>

      <TeacherDetailsContainer>
        <DetailsHeader
          teacher={teacher}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />

        <TeacherName>
          {teacher.name} {teacher.surname}
        </TeacherName>

        <DetailsInfoTeacher
          languages={teacher.languages}
          lessonInfo={teacher.lesson_info}
          conditions={teacher.conditions}
        />

        {!isExpanded ? (
          <>
            <TeacherBtn onClick={handleToggleExpand}>Read more</TeacherBtn>
            <DetailsTeacherLevels
              levels={teacher.levels}
              levelFilter={levelFilter}
            />
          </>
        ) : (
          <>
            <div>
              <p>{teacher.experience}</p>
              <DetailsReviews reviews={teacher.reviews} />
            </div>

            <DetailsTeacherLevels
              levels={teacher.levels}
              levelFilter={levelFilter}
            />

            <BookTrialButton onClick={handleBookTrial}>
              Book trial lesson
            </BookTrialButton>
          </>
        )}
      </TeacherDetailsContainer>
    </TeacherCardContainer>
  );
};
