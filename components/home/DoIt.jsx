import styled from 'styled-components';
import Section from '../../styled/Section';
import Container from '../../styled/Container';
import Heading2 from '../../styled/Heading2';
import Strong from '../../styled/Strong';

import DoCard from './DoCard';

import howIDoItList from '../../public/howIDoIt';

const DoIt = () => {
  return (
    <Section>
      <Container>
        <Heading2 center black data-aos='fade-up'>
          This is how I<br />
          <Strong>do it</Strong>
        </Heading2>
        <Grid>
          {howIDoItList.map((how) => (
            <DoCard key={how.id} {...how} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

const Grid = styled.div`
  gap: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export default DoIt;
