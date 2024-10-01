import React, { useState } from 'react';
import { useModal } from '../Common/ModalContext';
import { useAuth } from '../../services/useAuth';
import DefaultReviewerPhoto from '../../assets/imeges/defoltAvatar.webp';
import { toast } from 'react-toastify';
import { db } from '../../services/firebase';
import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore';
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

interface Teacher {
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

interface TeacherCardProps {
  teacher: Teacher;
  levelFilter: string;
  onToggleFavorite: () => void;
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
    setIsExpanded(!isExpanded);
  };

  const handleBookTrial = () => {
    openModal('bookTrialLesson', {
      avatar_url: teacher.avatar_url,
      name: teacher.name,
      surname: teacher.surname,
    });
    setIsExpanded(false);
  };

  const handleToggleFavorite = async () => {
    if (!user) {
      toast.error('This feature is available only for authenticated users.');
      return;
    }

    onToggleFavorite();

    const favoritesRef = collection(db, 'users', user.uid, 'favorites');
    const teacherDocRef = doc(favoritesRef, teacher.name);
    try {
      if (isFavorite) {
        await deleteDoc(teacherDocRef);
        toast.success(`${teacher.name} removed from favorites.`);
      } else {
        await setDoc(teacherDocRef, {
          name: teacher.name,
          surname: teacher.surname,
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
                <InfoText>Rating: {teacher.rating}</InfoText>
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
                {teacher.reviews.map((review, index) => (
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
                ))}
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
