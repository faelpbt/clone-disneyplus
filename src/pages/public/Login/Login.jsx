import React from 'react';
import styled from 'styled-components';
import Banner from './Banner/Banner';

export default function Login() {
  return (
    <Main>
      <Banner />
    </Main>
  );
}

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;
