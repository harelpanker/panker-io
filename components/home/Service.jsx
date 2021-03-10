import styled from 'styled-components';

const Service = ({ title, body, index, colors }) => {
  return (
    <StyledService data-aos='fade-up'>
      <NumberBox>
        <Line
          style={{
            backgroundImage: `linear-gradient(-180deg, black, ${colors[1].color})`,
          }}
        />
        <ColorDiv
          style={{
            backgroundImage: `linear-gradient(-45deg, ${colors[0].color}, ${colors[1].color})`,
          }}>
          {index + 1}
        </ColorDiv>
      </NumberBox>

      <ServiceTitle
        style={{
          backgroundImage: `linear-gradient(-45deg, ${colors[0].color}, ${colors[1].color})`,
        }}>
        {title}
      </ServiceTitle>
      <Text>{body}</Text>
    </StyledService>
  );
};
const Text = styled.p`
  font-size: 1.8rem;
  line-height: 180%;
  letter-spacing: 0.1rem;
  max-width: 77rem;
  font-weight: 500;
  color: #b3b3b3;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    font-size: 1.6rem;
  }
`;
const ServiceTitle = styled.h3`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: -0.1rem;
  text-transform: uppercase;
  margin-bottom: 3rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    font-size: 3.2rem;
  }
`;
const Line = styled.div`
  width: 0.1rem;
  height: 10rem;
  border-radius: 50% 50% 0 0;
`;
const NumberBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
`;
const ColorDiv = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 2rem;
`;
const StyledService = styled.li`
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 99rem;
  margin: 0 auto;
  text-align: center;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: 5rem 0;
  }
`;

export default Service;
