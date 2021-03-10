import styled from 'styled-components';
import Header from '../../styled/Header';
import Heading1 from '../../styled/Heading1';

const Hero = () => {
  return (
    <StyledHeader style={{ backgroundImage: "url('/images/pricing.jpg')" }}>
      <Header>
        <Heading1>Pricing</Heading1>
      </Header>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding: 0 2rem;
  min-height: 60vh;
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Hero;
