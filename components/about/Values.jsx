import styled from 'styled-components';
import Main from '../../styled/Main';
import Container from '../../styled/Container';
import Heading2 from '../../styled/Heading2';
import Strong from '../../styled/Strong';
import Text from '../../styled/Text';

const Values = () => {
  return (
    <Main>
      <Container>
        <Flex>
          <Heading2 black data-aos='fade-right'>
            My <Strong>Values</Strong>
          </Heading2>
          <TextGrid>
            <Text grey data-aos='fade-left'>
              Committed to constant improvement.
              <br />
              The web development field required, due to constant change, to
              always learn new things to stay at the top of the game and deliver
              the best websites out there.
            </Text>
            <Text grey data-aos='fade-left'>
              I'm building websites with the "pixel-perfect" set of mind, making
              sure, your website will be amazing - front to back!
            </Text>
          </TextGrid>
        </Flex>
      </Container>
    </Main>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    flex-direction: column;

    h2 {
      align-self: flex-start;
    }
  }
`;
const TextGrid = styled.div`
  max-width: 55rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export default Values;
