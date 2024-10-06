import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(223, 242, 225, 0.7);
  z-index: 10;
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        visible={true}
        height={60}
        width={60}
        color="#9BE1A0"
        strokeWidth={5}
        animationDuration="0.9"
        ariaLabel="rotating-lines-loading"
      />
    </LoaderWrapper>
  );
};
