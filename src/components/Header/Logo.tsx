import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
`;

const LogoIcon = styled.div`
  width: 28px;
  height: 28px;
  background: linear-gradient(180deg, #338af3 50%, #ffda44 50%);
  border-radius: 50%;
`;

const LogoText = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #338af3;
`;

const LogoSpan = styled.span`
  color: #ffda44;
`;

export const Logo: React.FC = () => {
  return (
    <LogoContainer to="/">
      <LogoIcon />
      <LogoText>
        Learn<LogoSpan>Lingo</LogoSpan>
      </LogoText>
    </LogoContainer>
  );
};
