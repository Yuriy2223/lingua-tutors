import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
`;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
