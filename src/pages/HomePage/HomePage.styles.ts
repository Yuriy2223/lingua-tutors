import styled from 'styled-components';
import Image2x from '../../assets/imeges/bac-2x.webp';
import { Iconsvg } from '../../components/Common/Icons';
import { Container } from '../../components/Common/Container';

export const HomePageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    padding: 20px 55px 32px;
  }
`;
export const HomePageMain = styled.section`
  display: flex;
  flex-direction: column;
  height: 70%;
  gap: 33px;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;
export const HomeLanguage = styled.div`
  border-radius: 30px;
  width: 100%;
  max-width: 720px;
  max-height: 530px;
  background: #f8f8f8;
  padding: 50px 20px;
  margin: 0 auto;

  @media (min-width: 610px) {
    padding: 98px 73px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: clamp(24px, 4vw + 1rem, 48px);
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color};
  width: 93%;
  margin: 0 auto;
  margin-bottom: 15px;

  @media (min-width: 1440px) {
    font-size: 48px;
    margin-bottom: 32px;
  }
`;
export const TitleSpan = styled.span`
  font-style: italic;
  font-weight: 400;
  background-color: ${({ theme }) => theme.primaryColorLight};
  margin-bottom: 64px;
`;
export const SubText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.primaryText};
  width: 90%;
  margin: 30px auto;

  @media (min-width: 1440px) {
    margin-bottom: 64px;
  }
`;
export const HomePageButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: ${({ theme }) => theme.primaryText};
  border-radius: 12px;
  padding: 16px 60px;
  border: none;
  background-color: ${({ theme }) => theme.primaryColorLight};
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }

  @media (min-width: 425px) {
    padding: 16px 88px;
  }
`;
export const HomeTutors = styled.div`
  display: none;

  @media (min-width: 610px) {
    border-radius: 30px;
    width: 568px;
    height: 530px;
    background-color: ${({ theme }) => theme.primaryColorLight};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;
export const HomePageImg = styled.img`
  width: 339px;
  height: 339px;
  background-size: cover;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2 / 1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    content: url(${Image2x});
  }
`;
export const HomePagePk = styled.div`
  width: 361px;
  height: 160px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.pc};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomePageIcon = styled(Iconsvg)`
  width: 47px;
  height: 57px;
  fill: ${({ theme }) => theme.fill};
`;
export const HomeFooter = styled.section`
  display: none;

  @media (min-width: 1040px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 116px;
    border-radius: 30px;
    background-color: transparent;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      display: block;
      pointer-events: none;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1312 116'%3E%3Crect x='0.75' y='0.75' width='1310.5' height='114.5' rx='29.25' stroke='%23F4C550' stroke-width='1.5' stroke-dasharray='15 15' fill='none'/%3E%3C/svg%3E")
        0 / 100% 100%;
    }
  }
`;
export const HomeFooterUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 85%;
  /* gap: 100px; */
`;
export const HomeFooterLi = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const HomeFooterH3 = styled.h3`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 28px;
  line-height: 114%;
  letter-spacing: -0.02em;
  color: #121417;
`;
export const HomeFooterP = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  width: 92px;
`;
