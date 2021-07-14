import styled from 'styled-components';
import Image from 'next/image';

const FloatingIcons = () => {
  return (
    <Container>
      <Box>
        <StyledLink
          href='https://github.com/harelpanker'
          target='_blank'
          rel='noopener noreferrer'>
          <Image
            src='/images-sm/github-icon.svg'
            alt='github'
            width={23}
            height={23}
          />
        </StyledLink>
        <StyledLink
          href='https://www.linkedin.com/in/panker-harel/'
          target='_blank'
          rel='noopener noreferrer'>
          <Image
            src='/images-sm/linkedin-icon.svg'
            alt='Linkedin'
            width={23}
            height={23}
          />
        </StyledLink>
        <StyledLink href='mailto:harelpanker@gmail.com'>
          <Image
            src='/images-sm/gmail-icon.svg'
            alt='E-mail'
            width={23}
            height={23}
          />
        </StyledLink>
      </Box>
    </Container>
  );
};
const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.nav`
  padding: 1rem 0;
  width: 100%;
  height: 15rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0.5rem 0 0;
`;
const Container = styled.div`
  position: fixed;
  width: 3.5rem;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: auto;
  display: flex;
  align-items: flex-end;
  z-index: 21;
`;

export default FloatingIcons;
