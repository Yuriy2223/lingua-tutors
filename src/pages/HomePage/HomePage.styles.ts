import styled from 'styled-components';
import Image2x from '../../assets/imeges/start-2x.png';
import { Iconsvg } from '../../components/Common/Icons';
import { Container } from '../../components/Common/Container';

export const HomePageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 55px 32px;
`;
export const HomePageMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const HomeLanguage = styled.div`
  border-radius: 30px;
  width: 720px;
  height: 530px;
  background: #f8f8f8;
  padding: 98px 73px;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color};
  margin-bottom: 32px;
  width: 548px;
`;
export const TitleSpan = styled.span`
  font-style: italic;
  font-weight: 400;
  background-color: ${({ theme }) => theme.primaryColorLight};
  margin-bottom: 64px;
`;
export const SubText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.primaryText};
  width: 472px;
  margin-bottom: 64px;
`;
export const HomePageButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: ${({ theme }) => theme.primaryText};
  border-radius: 12px;
  padding: 16px 88px;
  width: 267px;
  height: 60px;
  border: none;
  background-color: ${({ theme }) => theme.primaryColorLight};
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const HomeTutors = styled.div`
  border-radius: 30px;
  width: 568px;
  height: 530px;
  background-color: ${({ theme }) => theme.primaryColorLight};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
`;
export const HomeFooterUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 100px;
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
