import Skills from './Skills';
import Image from 'next/image';
import styled from 'styled-components';
import Section from '../../styled/Section';
import Container from '../../styled/Container';
import Divider from '../../styled/Divider';

const WhoAmI = () => {
  return (
    <>
      <Section>
        <Container>
          <Flex>
            <StyledImage
              src='/images/harel.jpeg'
              alt='Harel Panker web developer and designer'
              width={400}
              height={533}
            />
            <Position>
              <Name>Harel Panker</Name>
              <Profusion>Web developer & designer</Profusion>
            </Position>
          </Flex>
        </Container>
      </Section>
      <Divider />
      <Skills />
    </>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 55rem;
`;
const StyledImage = styled(Image)`
  width: 100%;
  max-width: 40rem;
  border-radius: 0.5rem;
`;
const Position = styled.div`
  text-align: center;
  margin: 2rem 0;
`;
const Name = styled.h3`
  font-size: 5rem;
  font-weight: 500;
  letter-spacing: -0.3rem;
  margin-bottom: -0.7rem;
`;
const Profusion = styled.h4`
  font-size: 3rem;
  font-weight: 400;
  opacity: 0.7;
  text-transform: capitalize;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    font-size: 1.8rem;
  }
`;

export default WhoAmI;
