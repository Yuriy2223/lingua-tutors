import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #888;
`;

export const NotFoundPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>404 Not Found</Title>
      <Description>
        Oops! The page you're looking for doesn't exist.
      </Description>
    </Wrapper>
  );
};
