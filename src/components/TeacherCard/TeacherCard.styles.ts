import styled from 'styled-components';
import { Iconsvg } from '../Common/Icons';

export const TeacherCardContainer = styled.div`
  border-radius: 24px;
  padding: 24px;
  max-width: 1184px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;

  @media (max-width: 1440px) {
    padding: 10px;
    margin: 0 auto;
  }
`;
export const TeacherImgWrapper = styled.div`
  padding: 0 10px;

  div {
    border: 3px solid ${({ theme }) => theme.primaryColorDark};
    border-radius: 100px;
    width: 120px;
    height: 120px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
  }

  img {
    border-radius: 100px;
    width: 96px;
    height: 96px;
  }
`;
export const TeacherImgIcon = styled(Iconsvg)`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 20px;
  top: 15px;
`;
export const TeacherDetailsContainer = styled.div`
  max-width: 968px;
  width: 100%;
`;
export const DetailsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  flex-wrap: wrap; 

  P {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
    margin: 0;

    @media (max-width: 374px) {
    display: none;
  }
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoWrapperUl = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap; 

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 16px;
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding: 0 16px;

    &:last-child {
      border-right: none;
    }
  }

  @media (max-width: 1040px) {
    row-gap: 10px;
    margin-top: 5px;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;
export const IconsBooks = styled(Iconsvg)`
  stroke: black;
  fill: none;
`;
export const InfoText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
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
export const ButtonFavorite = styled.button`
  margin-left: 54px;
  padding: 4px;
  border: none;
  background-color: transparent;

  @media (max-width: 1040px) {
    margin-left: 10px;
  }

  @media (max-width: 1439px) {
    margin-left: 30px;
  }
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
