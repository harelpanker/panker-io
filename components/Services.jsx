import styled from 'styled-components';
import Service from './Service';

import Section from '../styled/Section';
import Container from '../styled/Container';

import services from '../public/services';

const Services = () => {
  return (
    <Section noPadding>
      <ul>
        {services.map((service, i) => (
          <li key={service.id}>
            <Container>
              <Service {...service} />
            </Container>
            {i < services.length - 1 && <Divider />}
          </li>
        ))}
      </ul>
    </Section>
  );
};

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.black};
`;

export default Services;
