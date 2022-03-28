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

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 85vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 75vh;
  }
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

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    max-width: 550px;
  }

  @media screen and (min-width: 550px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 350px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    max-width: auto;
    margin-top: 13vh;
  }

  h4 {
    margin: 1vh 0;
    color: #fff;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }
  > .get-bundle-btn {
    outline: none;
    border: none;
    padding: 11.5px 15px;
    width: 100%;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    border-radius: 0.145rem;
    transition: all 0.7s ease-in-out;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      padding: 10px 0;
      font-size: 15px;
    }

    @media screen and (min-width: 280px) and (max-width: 550px) {
      padding: 5px 0;
      font-size: 14px;
    }

    &:hover {
      background: #0085ff;
    }
  }
  > .links {
    outline: none;
    border: none;
    font-size: 19px;
    background-color: transparent;
    color: #f9f9f9;

    @media screen and (min-width: 280px) and (max-width: 550px) {
      font-size: 15px;
    }
  }
  > .text-gary {
    color: gray;
  }
`;
