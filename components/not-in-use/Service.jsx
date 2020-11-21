import styled from 'styled-components';
import Heading3 from '../styled/Heading3';
import Text from '../styled/Text';

const Service = ({ title, body }) => {
  return (
    <StyledService data-aos='fade-up'>
      <Heading3>{title}</Heading3>
      <Text grey>{body}</Text>
    </StyledService>
  );
};

const StyledService = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
  padding: 10rem 0;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: 7rem 0;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export default Service;
