import Head from 'next/head';
import styled from 'styled-components';
import Form from '../components/contact/Form';
import ContactInfo from '../components/contact/ContactInfo';

import Header from '../styled/Header';
import Container from '../styled/Container';

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
              <ContactInfo />
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

export default contact;
