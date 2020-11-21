import { useEffect, useState } from 'react';
import Link from 'next/link';
import Project from './Project';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import projectsList from '../../public/projects';

import styled from 'styled-components';
import Section from '../../styled/Section';
import Container from '../../styled/Container';
import Heading2 from '../../styled/Heading2';
import Strong from '../../styled/Strong';
import Button from '../../styled/Button';

const Projects = () => {
  const [startWidth, setStartWidth] = useState(null);
  const { width } = useWindowDimensions();
  useEffect(() => setStartWidth(width), []);

  const [list, setList] = useState(projectsList);
  useEffect(() => setList(projectsList), []);

  return (
    <Section black>
      <Container>
        <Heading2 data-aos='fade-right'>
          My latest <Strong>projects</Strong>
        </Heading2>
        <Grid>
          {list.map(
            (project, i) =>
              i < (startWidth > 768 ? 4 : 3) && (
                <Project key={project.id} {...project} />
              )
          )}
        </Grid>
        <Flex>
          <Link href='/projects'>
            <Button data-aos='fade-left'>Full List</Button>
          </Link>
        </Flex>
      </Container>
    </Section>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  width: 100%;
  margin-top: 10rem;

  &:hover > a:not(:hover) img:first-child {
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
const Flex = styled.div`
  margin-top: 3rem;
`;

export default Projects;
