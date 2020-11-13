import Link from 'next/link';
import styled from 'styled-components';

import Main from '../styled/Main';
import Container from '../styled/Container';
import Heading2 from '../styled/Heading2';
import Text from '../styled/Text';
import Strong from '../styled/Strong';
import Button from '../styled/Button';

const WhatIDo = () => {
  return (
    <Main black>
      <Container>
        <Grid>
          <Left>
            <Heading2 data-aos='fade-up'>
              What I love <br />
              <Strong>Doing</Strong>
            </Heading2>
            <Text data-aos='fade-up'>
              Hello! My name is Harel, and I'm a passionate web developer and
              designer based in Vienna, Austria.
            </Text>
            <Text data-aos='fade-up'>
              As a freelancer, my knowledge is vast, from the basics of web
              development, HTML-CSS-JavaScrip to a bit more complex topics.
            </Text>
            <Text data-aos='fade-up'>
              To build websites for my clients, I'm using the most modern tools
              out there to give them the edge in the competitive investment of
              the web.
            </Text>
            <Link href='/about'>
              <Button data-aos='fade-up'>Learn More</Button>
            </Link>
          </Left>
          <Right data-aos='fade-left'>
            <img
              src='./images/idea.jpg'
              alt='What we do'
              width='100%'
              loading='lazy'
            />
          </Right>
        </Grid>
      </Container>
    </Main>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'left right';
  justify-items: start;
  gap: 0;

  width: 100%;
  height: 100%;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'right'
      'left';
  }
`;
const Left = styled.div`
  grid-area: left;
  padding: 10rem 6rem 10rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-right: 1px solid ${(props) => props.theme.colors.white};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: 2rem 1rem;
    border-right: none;
  }
`;
const Right = styled.div`
  grid-area: right;
  padding: 10rem 0 10rem 6rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: 2rem 1rem;
    align-items: center;
  }
`;

export default WhatIDo;
