import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <IconWrapper>
        <MenuRoundedIcon fontSize='large' onClick={handleOpen} />
      </IconWrapper>
      <AnimatePresence>
        {open && (
          <Dropdown
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
            exit={{ opacity: 0, y: -20 }}>
            <StyledUl onClick={handleOpen}>
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
          </Dropdown>
        )}
      </AnimatePresence>
    </>
  );
};
const Dropdown = styled(motion.nav)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  position: absolute;
  top: 50px;
  right: 0;
  height: auto;
  max-height: ${(props) => (!props.open ? '1000px' : '0')};
  opacity: ${(props) => (!props.open ? '1' : '0')};
  transition: all 0.6s ease-in-out;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
`;
const StyledUl = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  li {
    height: 100%;

    display: flex;
    align-items: center;
  }

  a {
    height: 100%;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    padding: 1rem 0;
    font-size: 3rem;
    text-transform: uppercase;

    display: flex;
    align-items: center;
  }
`;
export default MobileNav;
