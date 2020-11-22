import Link from 'next/link';
import { useRouter } from 'next/router';
import CTA from './CTA';
import styled from 'styled-components';
import StyledFooter from '../styled/StyledFooter';
import Container from '../styled/Container';
import Divider from '../styled/Divider';

const Footer = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/contact' && <CTA />}
      <Divider white />
      <StyledFooter black>
        <Container>
          <StyledFlex>
            <Link href='/'>
              <StyledImg src='/images/logo-panker.svg' alt='Logo' />
            </Link>
            <nav>
              <StyledList>
                <li>
                  <Link href='/'>
                    <StyledLink>home</StyledLink>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <StyledLink>about</StyledLink>
                  </Link>
                </li>
                <li>
                  <Link href='/projects'>
                    <StyledLink>projects</StyledLink>
                  </Link>
                </li>
                <li>
                  <Link href='/pricing'>
                    <StyledLink>pricing</StyledLink>
                  </Link>
                </li>
                <li>
                  <Link href='/contact'>
                    <StyledLink>contact</StyledLink>
                  </Link>
                </li>
              </StyledList>
            </nav>
          </StyledFlex>
        </Container>
      </StyledFooter>
    </>
  );
};
const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    flex-direction: column;
  }

  nav {
    @media only screen and (max-width: ${(props) =>
        props.theme.breakPoints.mobile}) {
      margin-top: 2rem;
    }
  }
`;
const StyledList = styled.ul`
  display: flex;
  li {
    padding: 1rem;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
const StyledImg = styled.img`
  cursor: pointer;
`;
const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  position: relative;
  font-size: 2rem;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }
  &::before {
    bottom: 0;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transition: width 0.2s ease-in-out;
    width: 0;
    background-color: ${(props) => props.theme.colors.white};
  }
  &:hover::before {
    width: 100%;
  }

  ${(props) =>
    props.dark &&
    css`
      color: ${(props) => props.theme.colors.darkBlue};
      &:hover {
        color: ${(props) => props.theme.colors.darkBlue};
      }
      &::before {
        background-color: ${(props) => props.theme.colors.darkBlue};
      }
    `}

  @media only screen and (max-width: ${(props) =>
    props.theme.breakPoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export default Footer;
