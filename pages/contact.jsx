import Head from 'next/head';
import styled from 'styled-components';
import Form from '../components/Form';

import Header from '../styled/Header';
import Container from '../styled/Container';
import Heading1 from '../styled/Heading1';
import Strong from '../styled/Strong';

const contact = () => {
  return (
    <>
      <Head>
        <title>Harel Panker | Contact</title>
        <meta
          name='description'
          content='Feel free to contact me on this page'
        />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      </Head>
      <Header>
        <Container width='1100px'>
          <StyledGrid>
            <div>
              <StyledFlex>
                <Heading1 align='left' weight='500' black>
                  Let's work <Strong>together</Strong>
                </Heading1>
                <StyledLink href='mailto:harelpanker@gmail.com'>
                  harelpanker@gmail.com
                </StyledLink>
                <StyledLink href='tel:+4367763721014'>
                  +43 677 63721014
                </StyledLink>
              </StyledFlex>
              <Form />
            </div>

            <StyledImg
              src='/images/handshake.jpg'
              alt='Handshake'
              loading='lazy'
            />
          </StyledGrid>
        </Container>
      </Header>
    </>
  );
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 10rem;
  min-height: 50vh;
  margin-top: 5.5rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    gap: 5rem;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;
const StyledImg = styled.img`
  max-height: 70rem;
  border-radius: 0.5rem;
  max-width: 100%;
`;
const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  text-decoration: underline;
  font-size: 1.8rem;
  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export default contact;
