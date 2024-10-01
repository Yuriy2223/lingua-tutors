import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/imeges/sticker.png';
import {
  HomePageContainer,
  HomePageMain,
  HomeLanguage,
  Title,
  TitleSpan,
  SubText,
  HomePageButton,
  HomeTutors,
  HomePageImg,
  HomePagePk,
  HomePageIcon,
  HomeFooter,
  HomeFooterUl,
  HomeFooterLi,
  HomeFooterH3,
  HomeFooterP,
} from './HomePage.styles';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/teachers');
  };

  return (
    <HomePageContainer>
      <HomePageMain>
        <HomeLanguage>
          <Title>
            Unlock your potential with the best <TitleSpan>language</TitleSpan>{' '}
            tutors
          </Title>
          <SubText>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors
          </SubText>
          <HomePageButton type="button" onClick={handleButtonClick}>
            Get started
          </HomePageButton>
        </HomeLanguage>
        <HomeTutors>
          <HomePageImg src={Image} alt="Language tutors" />
          <HomePagePk>
            <HomePageIcon width={47} height={57} iconName="apple" />
          </HomePagePk>
        </HomeTutors>
      </HomePageMain>

      <HomeFooter>
        <HomeFooterUl>
          <HomeFooterLi>
            <HomeFooterH3>32,000 +</HomeFooterH3>
            <HomeFooterP>Experienced tutors</HomeFooterP>
          </HomeFooterLi>
          <HomeFooterLi>
            <HomeFooterH3>300,000 +</HomeFooterH3>
            <HomeFooterP>5-star tutor reviews</HomeFooterP>
          </HomeFooterLi>
          <HomeFooterLi>
            <HomeFooterH3>120 +</HomeFooterH3>
            <HomeFooterP>Subjects taught</HomeFooterP>
          </HomeFooterLi>
          <HomeFooterLi>
            <HomeFooterH3>200 +</HomeFooterH3>
            <HomeFooterP>Tutor nationalities</HomeFooterP>
          </HomeFooterLi>
        </HomeFooterUl>
      </HomeFooter>
    </HomePageContainer>
  );
};
