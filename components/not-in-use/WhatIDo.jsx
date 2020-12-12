import Link from 'next/link';
import styled from 'styled-components';

import Container from '../../styled/Container';
import Heading2 from '../../styled/Heading2';
import Text from '../../styled/Text';
import Strong from '../../styled/Strong';

const WhatIDo = () => {
  return (
    <Main>
      <Container>
        <Grid>
          <Image
            src='./images/love-image.png'
            alt='What we do'
            loading='lazy'
          />
          <Left>
            <Heading2 data-aos='fade-up'>
              What I love
              <br />
              <Strong>Doing</Strong>
            </Heading2>
            <Text data-aos='fade-up'>
              Hello! My name is Harel, and I'm a passionate web developer and
              designer based in Vienna, Austria.
            </Text>
            <Text data-aos='fade-up'>
              As a freelancer, my knowledge is vast, from the basics of web
              development, HTML-CSS-JavaScript to a bit more complex topics.
            </Text>
            <Text data-aos='fade-up'>
              I use the most modern tools to build my clients‘ website. This
              gives them the edge in the competitive investment of the web.
            </Text>
            <Link href='/about'>
              <Btn data-aos='fade-up'>Learn More</Btn>
            </Link>
          </Left>
        </Grid>
      </Container>
    </Main>
  );
};
const Btn = styled.button`
  margin-top: 3rem;
  padding: 1rem 2.3rem;
  color: ${(props) => props.theme.colors.white};
  background-color: #cf0618;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s ease-in-out all !important;

  &:hover {
    transform: translateY(-3px);
    background-color: rgba(207, 6, 23, 0.75);
  }
`;
const Main = styled.main`
  padding: 10rem 0;
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: 7rem 0;
  }
`;
const Grid = styled.div`
  width: 100%;
  height: 100%;
`;
const Left = styled.div`
  max-width: 55rem;
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

export default WhatIDo;
