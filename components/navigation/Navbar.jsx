import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import Container from '../../styled/Container';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Navbar = () => {
  const [startWidth, setStartWidth] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { width } = useWindowDimensions();
  useEffect(() => setStartWidth(width), []);

  return (
    <StyledHeader
      style={{
        backdropFilter: `${!open ? 'saturate(180%) blur(5px)' : ''}`,
        backgroundColor: `${!open ? 'rgba(0, 0, 0, 0.5)' : 'transparent'}`,
      }}>
      <Container width='auto'>
        <StyledNav>
          <Link href='/'>
            <StyledImg
              src='/images/logo.svg'
              alt='Logo'
              width={150}
              height={50}
            />
          </Link>
          {startWidth > 768 ? (
            <DesktopNav />
          ) : (
            <MobileNav open={open} handleOpen={handleOpen} />
          )}
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 5.5rem;
  z-index: 20;
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledNav = styled.nav`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledImg = styled(Image)`
  cursor: pointer;
  max-height: 5rem;
  z-index: 21;
`;

export default Navbar;
