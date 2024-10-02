import React, { useState } from 'react';
import { useModal } from '../Common/ModalContext';
import { useAuth } from '../../services/authContext';
import DefaultReviewerPhoto from '../../assets/imeges/defoltAvatar.webp';
import { toast } from 'react-toastify';
import { db } from '../../services/firebase';
import { ref, set, remove } from 'firebase/database';
import {
  IconHeart,
  IconsBooks,
  IconsStar,
  InfoItem,
  InfoText,
  InfoTextSpan,
  InfoWrapper,
  TeacherCardContainer,
  TeacherDetails,
  TeacherHeader,
  TeacherHeaderButton,
  Languages,
  TeacherImg,
  TeacherImgIcon,
  TeacherImgWrapper,
  TeacherLanguageLevel,
  InfoWrapperUl,
  TeacherName,
  TeacherInfoLI,
  TeacherInfoUL,
  TeacherInfoSpan,
  TeacherInfoSpeaks,
  TeacherBtn,
  TeacherLevel,
  ReviewList,
  ReviewItem,
  ReviewerPhoto,
  ReviewerInfo,
  ReviewerName,
  ReviewerRating,
  ReviewComment,
  BookTrialButton,
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
  const { user } = useAuth();
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

  const handleToggleFavorite = async () => {
    console.log('User status:', user); 
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
        await set(favoritesRef, {
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
        });
        toast.success(`${teacher.name} added to favorites.`);
      }
    } catch (error) {
      toast.error('Error occurred while updating favorites.');
      console.error('Error updating favorite:', error);
    }
  };

  return (
    <TeacherCardContainer>
      <TeacherImgWrapper>
        <TeacherImgIcon width={12} height={12} iconName="online" />
        <TeacherImg src={teacher.avatar_url || DefaultReviewerPhoto} />
      </TeacherImgWrapper>

      <TeacherDetails>
        <TeacherHeader>
          <Languages>Languages</Languages>
          <InfoWrapper>
            <InfoWrapperUl>
              <InfoItem>
                <IconsBooks width={20} height={20} iconName="book" />
                <InfoText>
                  Lessons:<InfoTextSpan>online</InfoTextSpan>
                </InfoText>
              </InfoItem>
              <InfoItem>
                <InfoText>Lessons done: {teacher.lessons_done}</InfoText>
              </InfoItem>
              <InfoItem>
                <IconsStar width={20} height={20} iconName="star" />
                <InfoText>
                  Rating:{' '}
                  {teacher.rating !== undefined
                    ? teacher.rating.toFixed(1)
                    : 'N/A'}
                </InfoText>
              </InfoItem>
              <InfoItem>
                <InfoText>
                  Price / 1 hour:
                  <InfoTextSpan>${teacher.price_per_hour}</InfoTextSpan>
                </InfoText>
              </InfoItem>
            </InfoWrapperUl>
            <TeacherHeaderButton type="button" onClick={handleToggleFavorite}>
              <IconHeart
                width={26}
                height={26}
                iconName="heart"
                className={isFavorite ? 'active' : ''}
              />
            </TeacherHeaderButton>
          </InfoWrapper>
        </TeacherHeader>
        <TeacherName>
          {teacher.name} {teacher.surname}
        </TeacherName>
        <TeacherInfoUL>
          <TeacherInfoLI>
            Speaks:
            <TeacherInfoSpeaks>
              {teacher.languages.join(', ')}
            </TeacherInfoSpeaks>
          </TeacherInfoLI>
          <TeacherInfoLI>
            Lesson Info:<TeacherInfoSpan>{teacher.lesson_info}</TeacherInfoSpan>
          </TeacherInfoLI>
          <TeacherInfoLI>
            Conditions:
            <TeacherInfoSpan>{teacher.conditions.join(', ')}</TeacherInfoSpan>
          </TeacherInfoLI>
        </TeacherInfoUL>

        {!isExpanded ? (
          <>
            <TeacherBtn onClick={handleToggleExpand}>Read more</TeacherBtn>
            <TeacherLanguageLevel>
              {teacher.levels.map((level, index) => (
                <TeacherLevel
                  key={index}
                  className={
                    level.toLowerCase() === levelFilter.toLowerCase()
                      ? 'active'
                      : ''
                  }
                >
                  # {level}
                </TeacherLevel>
              ))}
            </TeacherLanguageLevel>
          </>
        ) : (
          <>
            <div>
              <p>{teacher.experience}</p>
              <ReviewList>
                {teacher.reviews.length > 0 ? (
                  teacher.reviews.map((review, index) => (
                    <ReviewItem key={index}>
                      <ReviewerPhoto src={DefaultReviewerPhoto} />
                      <ReviewerInfo>
                        <ReviewerName>{review.reviewer_name}</ReviewerName>
                        <ReviewerRating>
                          <IconsStar width={20} height={20} iconName="star" />
                          {review.reviewer_rating}
                        </ReviewerRating>
                      </ReviewerInfo>
                      <ReviewComment>{review.comment}</ReviewComment>
                    </ReviewItem>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </ReviewList>
            </div>

            <TeacherLanguageLevel>
              {teacher.levels.map((level, index) => (
                <TeacherLevel
                  key={index}
                  className={
                    level.toLowerCase() === levelFilter.toLowerCase()
                      ? 'active'
                      : ''
                  }
                >
                  # {level}
                </TeacherLevel>
              ))}
            </TeacherLanguageLevel>

            <BookTrialButton onClick={handleBookTrial}>
              Book trial lesson
            </BookTrialButton>
          </>
        )}
      </TeacherDetails>
    </TeacherCardContainer>
  );
};
