import styled from 'styled-components';
import Section from '../../styled/Section';
import Container from '../../styled/Container';
import Heading2 from '../../styled/Heading2';
import Strong from '../../styled/Strong';

import skills from '../../public/skills';

const Skills = () => {
  return (
    <Section>
      <Container>
        <Grid>
          <div>
            <Heading2 black data-aos='fade-right'>
              Some of my <Strong>Skills</Strong>
            </Heading2>
            <List>
              {skills.map((skill) => (
                <ListItem key={skill.id} data-aos='fade-right'>
                  {skill.name}
                </ListItem>
              ))}
            </List>
          </div>
          <Image
            src='/images/design.jpg'
            alt='design'
            loading='lazy'
            data-aos='fade-left'
          />
        </Grid>
      </Container>
    </Section>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  max-width: 99rem;
  margin: 0 auto;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
const List = styled.ul`
  font-size: 1.8rem;
`;
const ListItem = styled.li`
  margin-bottom: 1.2rem;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 55rem;
  justify-self: end;
  border-radius: 0.5rem;
`;

export default Skills;
