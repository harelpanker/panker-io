import styled from 'styled-components';

const Client = ({ name, text }) => {
  return (
    <Card>
      <Text>{text}</Text>
      <Name>{name}</Name>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    padding: 2rem;
  }
`;
const Text = styled.p`
  font-size: 4rem;
  text-align: center;
  margin: 0;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    font-size: 2rem;
  }
`;
const Name = styled.p`
  margin-top: 2rem;
  font-size: 3rem;
  align-self: flex-start;
  color: ${(props) => props.theme.colors.orange};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    font-size: 1.7rem;
  }
`;

export default Client;
