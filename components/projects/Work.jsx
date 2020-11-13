import styled from 'styled-components';
import Main from '../../styled/Main';
import Container from '../../styled/Container';

import projectsList from '../../public/projects';
import Project from './Project';

const Work = () => {
  return (
    <Main>
      <Container width='990px'>
        <Grid>
          {projectsList.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </Grid>
      </Container>
    </Main>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 0 auto;
  margin-top: 5rem;

  &:hover > a:not(:hover) img:first-child {
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export default Work;
