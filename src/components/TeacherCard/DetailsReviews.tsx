import React from 'react';
import styled from 'styled-components';
import DefaultReviewerPhoto from '../../assets/imeges/defoltAvatar.webp';
import { IconsStar } from './TeacherCard.styles';

const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 32px 0 0 0;
  gap: 32px;

  li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #e0e0e0;
  }
`;
const ReviewerPhoto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100px;
  object-fit: cover;
`;
const ReviewerInfo = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ReviewerName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;
const ReviewerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
`;
const ReviewComment = styled.p`
  margin: 16px 0 0 0;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.primaryBlack};
`;

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface TeacherReviewsProps {
  reviews: Review[];
}

export const DetailsReviews: React.FC<TeacherReviewsProps> = ({ reviews }) => {
  return (
    <ReviewList>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <li key={index}>
            <ReviewerPhoto src={DefaultReviewerPhoto} />
            <ReviewerInfo>
              <ReviewerName>{review.reviewer_name}</ReviewerName>
              <ReviewerRating>
                <IconsStar width={20} height={20} iconName="star" />
                {review.reviewer_rating}
              </ReviewerRating>
            </ReviewerInfo>
            <ReviewComment>{review.comment}</ReviewComment>
          </li>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </ReviewList>
  );
};
