import styled from 'styled-components';
import Section from '../../styled/Section';
import Container from '../../styled/Container';
import Heading2 from '../../styled/Heading2';
import Strong from '../../styled/Strong';
import Heading3 from '../../styled/Heading3';
import Text from '../../styled/Text';

const Team = () => {
  return (
    <Section>
      <Container>
        <Heading2 black data-aos='fade-right'>
          Who <Strong>am I</Strong>
        </Heading2>

        <Grid>
          <TextWrapper data-aos='fade-right'>
            <Heading3 black>Harel</Heading3>
            <Roll>Web Developer / Designer</Roll>
            <SmallDivider />
            <Text grey data-aos='fade-up'>
              Hi! My name is Harel and I'm a{' '}
              <Strong>front-end web developer & designer</Strong> from Vienna,
              Austria.
            </Text>
            <Text grey data-aos='fade-up'>
              I have a <Strong>wide knowledge</Strong> of the basics of web
              development: HTML, CSS, and Javascript.
            </Text>
            <Text grey data-aos='fade-up'>
              In addition, I have <Strong>specialized knowledge</Strong> in
              SACC/SCSS, Material-UI, Bootstrap, Styled Components, React.js,
              and Next.js.
            </Text>
            <Text grey data-aos='fade-up'>
              Other things <Strong>worth mentioning:</Strong>
            </Text>
            <ul data-aos='fade-up'>
              <ListItem>
                <Text grey data-aos='fade-up'>
                  I follow the best{' '}
                  <Strong>SEO (Search Engine Optimization)</Strong> practice,
                  which means that I write a semantic code, handle everything
                  that Google loves to see in websites, and connect the websites
                  to Google platforms.
                </Text>
              </ListItem>
              <ListItem>
                <Text grey data-aos='fade-up'>
                  I follow{' '}
                  <Strong>UI/UX (User Interface / User Experience)</Strong>{' '}
                  principles, meaning that the websites I build will be more
                  pleasant to use and more engaging.
                </Text>
              </ListItem>
            </ul>
          </TextWrapper>
          <Img src='/images/harel.jpeg' alt='Mirjam' data-aos='fade-left' />
        </Grid>
      </Container>
    </Section>
  );
};

const Grid = styled.div`
  max-width: 99rem;
  margin: 0 auto;
  margin-top: 10rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 3rem;
  }
`;
const Img = styled.img`
  height: 35rem;
  justify-self: ${(props) => (props.start ? 'start' : 'end')};
  border-radius: 0.5rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    justify-self: center;
  }
`;
const SmallDivider = styled.div`
  width: 20%;
  height: 0.1rem;
  margin-right: auto;
  margin-bottom: 3rem;
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.orange};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    width: 10%;
  }
`;

const TextWrapper = styled.div`
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    margin-left: 2rem;
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    margin-left: 0;
  }
`;
const Roll = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.colors.darkBlue};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    font-size: 1.6rem;
  }
`;
const ListItem = styled.li`
  padding-left: 1rem;
`;
export default Team;
