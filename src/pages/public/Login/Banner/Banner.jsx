import React from 'react';
import styled from 'styled-components';
import logo1 from './img/cta-logo-one.svg';
import logo2 from './img/cta-logo-two.png';

export default function Banner() {
  return (
    <Background>
      <Container>
        <Content>
          <img src={logo1} alt="logo/img" />
          <button
            type="button"
            className="get-bundle-btn"
          >
            Get The Disney Bundle
          </button>
          <h4>Stream now: Terms Apply</h4>
          <img src={logo2} alt="logo/img" />
          <button
            type="button"
            className="links"
          >
            Sign Up for Disney+ Only
          </button>
          <button
            type="button"
            className="links text-gary"
          >
            $7.99/month or $79.99/year.
          </button>
        </Content>
      </Container>
    </Background>
  );
}

const Background = styled.section`
  background-image: url('https://store-images.s-microsoft.com/image/apps.42257.14495311847124170.e89a4dce-fd9a-4a10-b8e4-a6c3aa1c055e.43faaf3c-df46-4a8b-a1ea-a1cfa97011f6?mode=scale&q=90&h=720&w=1280');
  filter: opacity(85%) drop-shadow(0px 0px 1px #000000);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 95vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
  }
`;
