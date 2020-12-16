import { useState } from 'react';
import styled from 'styled-components';
import Main from '../../styled/Main';
import Container from '../../styled/Container';

import projectsList from '../../public/projects';
import Project from './Project';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Work = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => setTab(newValue);

  return (
    <Main>
      <Container width='990px'>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label='Tabs the first show work of mein in Webflow and the second in React'
          centered>
          <StyledTab label='Webflow' />
          <StyledTab label='React' />
        </Tabs>
        {tab === 0 && (
          <Grid>
            {projectsList
              .filter((project) => project.type === 'webflow')
              .map((project) => (
                <Project key={project.id} {...project} />
              ))}
          </Grid>
        )}
        {tab === 1 && (
          <Grid>
            {projectsList
              .filter((project) => project.type === 'react')
              .map((project) => (
                <Project key={project.id} {...project} />
              ))}
          </Grid>
        )}
      </Container>
    </Main>
  );
};
const StyledTab = styled(Tab)`
  padding: 6px 18px;
  line-height: 1;
  font-weight: 700;
  font-size: 1.3rem;
`;
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
