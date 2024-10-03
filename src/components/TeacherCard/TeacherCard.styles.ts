import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';

export const TeacherCardContainer = styled.div`
  border-radius: 24px;
  padding: 24px;
  width: 1184px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
`;
export const TeacherImgWrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.primaryColorDark};
  border-radius: 100px;
  width: 120px;
  height: 120px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const TeacherImgIcon = styled(Iconsvg)`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 20px;
  top: 15px;
`;
export const TeacherImg = styled.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`;
export const TeacherDetails = styled.div`
  width: 968px;
`;
export const TeacherHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const Languages = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
  margin: 0;
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoWrapperUl = styled.ul`
  display: flex;
  align-items: center;
`;
export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 16px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding: 0 16px;

  &:last-child {
    border-right: none;
  }
`;
export const IconsBooks = styled(Iconsvg)`
  stroke: black;
  fill: none;
`;
export const InfoText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
`;
export const InfoTextSpan = styled.span`
  color: var(--green-color);
  margin-left: 5px;
`;
export const IconsStar = styled(Iconsvg)`
  stroke: var(--yellow-color);
  fill: var(--yellow-color);
`;
export const TeacherHeaderButton = styled.button`
  margin-left: 54px;
  padding: 4px;
  border: none;
  background-color: transparent;
`;
export const IconHeart = styled(Iconsvg)`
  stroke: black;
  fill: none;

  &:hover {
    stroke: ${({ theme }) => theme.primaryColorDark};
    fill: ${({ theme }) => theme.primaryColorDark};
  }

  &.active {
    stroke: ${({ theme }) => theme.primaryColorDark};
    fill: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const TeacherName = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #121417;
  color: ${({ theme }) => theme.primaryBlack};
  margin-bottom: 32px;
`;
export const TeacherInfoUL = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;
export const TeacherInfoLI = styled.li`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;
export const TeacherInfoSpeaks = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #121417;
  margin-left: 5px;
`;
export const TeacherInfoSpan = styled.span`
  color: #121417;
  margin-left: 5px;
`;
export const TeacherBtn = styled.button`
  border-radius: 10px;
  padding: 2px 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  border: none;
  color: ${({ theme }) => theme.primaryBlack};
  background-color: ${({ theme }) => theme.primaryColorLight};

  &:hover,
  :active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const TeacherLanguageLevel = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const TeacherLevel = styled.li`
  border-radius: 35px;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  border: 1px solid rgba(18, 20, 23, 0.2);
  color: ${({ theme }) => theme.primaryBlack};
  background-color: transparent;
  transition: all 300ms ease;

  &.active {
    background-color: ${({ theme }) => theme.primaryColorDark};
    border-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 32px 0 0 0;
  gap: 32px;
`;
export const ReviewItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #e0e0e0;
`;
export const ReviewerPhoto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100px;
  object-fit: cover;
`;
export const ReviewerInfo = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ReviewerName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;
export const ReviewerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 0;
`;
export const ReviewComment = styled.p`
  margin: 16px 0 0 0;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.primaryBlack};
`;
export const BookTrialButton = styled.button`
  margin-top: 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.56;
  border-radius: 12px;
  padding: 10px 16px;
  border: none;
  color: ${({ theme }) => theme.primaryBlack};
  background-color: ${({ theme }) => theme.primaryColorLight};

  &:hover,
  :active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
