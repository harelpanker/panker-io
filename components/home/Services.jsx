import styled from 'styled-components';
import Service from './Service';

import Section from '../../styled/Section';
import Container from '../../styled/Container';

import services from '../../public/services';

const Services = () => {
  return (
    <StyledSection>
      <Container>
        <StyledHeader>What I Do</StyledHeader>
        <ul>
          {services.map((service, index) => (
            <Service key={service.id} {...service} index={index} />
          ))}
        </ul>
      </Container>
    </StyledSection>
  );
};
const StyledHeader = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;
const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;
export default Services;
