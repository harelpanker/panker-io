import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Header from '../../styled/Header';
import Container from '../../styled/Container';

const Hero = () => {
  return (
    <StyledHeader>
      <Header>
        <Container>
          <MainHeader>
            <span>Design.</span>
            <span>Develop.</span>
            <span>Launch.</span>
          </MainHeader>
          <HeroCTA>
            <Link href='/projects'>
              <PrimaryBtn>Projects</PrimaryBtn>
            </Link>
            <Link href='/about'>
              <SecondaryBtn>About Me</SecondaryBtn>
            </Link>
          </HeroCTA>
        </Container>
      </Header>
    </StyledHeader>
  );
};
const change = keyframes`
{
  0% { opacity: 0.1; }
  100% { opacity: 1; }
  /* 100% { opacity: 0.1; } */
}
`;

const HeroCTA = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  justify-items: end;
  margin-top: 3rem;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  line-height: 3.8rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    min-width: 20rem;
    height: 5rem;
    padding: 0 2.5rem 0 2.5rem;
    margin: 0;
    transition: all 0.2s ease;
    border-radius: 0.7rem;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    font-size: 1.6rem;
    margin-top: 6rem;
    a {
      height: 4rem;
    }
  }
`;
const PrimaryBtn = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  background-color: ${(props) => props.theme.colors.white};
  border: 0.1rem solid ${(props) => props.theme.colors.white};
  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};
  }
`;
const SecondaryBtn = styled.a`
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  border: 0.1rem solid rgba(255, 255, 255, 0.25);
  justify-self: start;
  &:hover {
    border: 0.1rem solid ${(props) => props.theme.colors.white};
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    justify-self: center;
  }
`;
const MainHeader = styled.h1`
  font-size: 15rem;
  color: transparent;
  background-image: white;
  text-align: center;
  z-index: 9;
  span {
    display: block;
    opacity: 0.1;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(-45deg, #00c6ff, #0072ff);
    animation: ${change} 1.5s ease-in forwards;

    &:nth-child(2) {
      animation-delay: 0.5s;
      background-image: linear-gradient(-45deg, #f12711, #f5af19);
    }
    &:nth-child(3) {
      animation-delay: 1s;
      background-image: linear-gradient(-45deg, #ff00cc, #333399);
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    font-size: 10rem;
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    font-size: 6rem;
  }
`;
const StyledHeader = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding: 0 2rem;
  min-height: 100vh;
  background-color: black;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Hero;
