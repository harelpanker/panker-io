import styled, { keyframes } from 'styled-components';
import Header from '../../styled/Header';
import Container from '../../styled/Container';
import Heading1 from '../../styled/Heading1';

const Hero = () => {
  return (
    <StyledHeader>
      <Header>
        <Container>
          <Heading1>
            I build <strong>your success</strong> on the web
          </Heading1>
        </Container>
      </Header>
    </StyledHeader>
  );
};

const slide = keyframes`
{
  0% { background-position-x: 0% }
  100% { background-position-x: 600vw }
}
`;

const StyledHeader = styled.div`
  color: ${(props) => props.theme.colors.white};
  padding: 0 2rem;
  min-height: 100vh;
  background: repeating-linear-gradient(
    -45deg,
    #000428 0%,
    #004e92 25%,
    #000428 50%
  );
  background-size: 600vw 600vw;
  animation: ${slide} 10s infinite linear forwards;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Hero;
