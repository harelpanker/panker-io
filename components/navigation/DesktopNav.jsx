import Link from 'next/link';
import styled from 'styled-components';

const DesktopNav = () => {
  return (
    <StyledUl>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href='/pricing'>
          <a>Pricing</a>
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </li>
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  list-style-type: none;
  height: 100%;
  margin: 0;

  display: flex;
  align-items: center;

  li {
    height: 100%;

    display: flex;
    align-items: center;
  }

  a {
    height: 100%;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    padding: 0 1rem;
    transition: 0.3s ease-in-out all;
    font-size: 1.6rem;
    letter-spacing: 1px;
    text-transform: lowercase;

    display: flex;
    align-items: center;

    &:hover {
      background-color: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export default DesktopNav;
