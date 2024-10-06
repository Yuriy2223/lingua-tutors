import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/imeges/bac.webp';
import {
  HomePageContainer,
  HomePageMain,
  HomeLanguage,
  Title,
  HomePageButton,
  HomeTutors,
  HomePageIcon,
  HomeFooter,
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
            Unlock your potential with the best <span>language</span> tutors
          </Title>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <div>
            <HomePageButton type="button" onClick={handleButtonClick}>
              Get started
            </HomePageButton>
          </div>
        </HomeLanguage>
        <HomeTutors>
          <img src={Image} alt="Language tutors" />
          <div>
            <HomePageIcon width={47} height={57} iconName="apple" />
          </div>
        </HomeTutors>
      </HomePageMain>

      <HomeFooter>
        <ul>
          <li>
            <h4>32,000 +</h4>
            <p>Experienced tutors</p>
          </li>
          <li>
            <h4>300,000 +</h4>
            <p>5-star tutor reviews</p>
          </li>
          <li>
            <h4>120 +</h4>
            <p>Subjects taught</p>
          </li>
          <li>
            <h4>200 +</h4>
            <p>Tutor nationalities</p>
          </li>
        </ul>
      </HomeFooter>
    </HomePageContainer>
  );
};
