import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import Container from '../../styled/Container';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Navbar = () => {
  const [startWidth, setStartWidth] = useState(null);
  const { width } = useWindowDimensions();
  useEffect(() => setStartWidth(width), []);

  return (
    <StyledHeader>
      <Container width='auto'>
        <StyledNav>
          <Link href='/'>
            <StyledImg src='/images/logo.svg' alt='Logo' />
          </Link>
          {startWidth > 768 ? <DesktopNav /> : <MobileNav />}
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 55px;
  z-index: 20;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 0;
  width: 100%;
`;
const StyledNav = styled.nav`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledImg = styled.img`
  cursor: pointer;
  max-height: 4rem;
`;

export default Navbar;
