import styled from 'styled-components';
import Headline3 from '../styled/Heading3';
import Text from '../styled/Text';

const DoCard = ({ title, text, img }) => {
  return (
    <Card data-aos='fade-up'>
      <img src={img} alt={title} />
      <Headline3>{title}</Headline3>
      <Text grey align='center'>
        {text}
      </Text>
    </Card>
  );
};
const Card = styled.div`
  text-align: center;
  margin-top: 5rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    margin-top: 2rem;
  }

  img {
    height: 10rem;
    width: 10rem;
    padding: 2rem;
    border-radius: 50%;
    margin-bottom: 3rem;

    background: #1a2a6c; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      -45deg,
      #fdbb2d,
      #b21f1f,
      #1a2a6c
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      -45deg,
      #fdbb2d,
      #b21f1f,
      #1a2a6c
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media only screen and (max-width: ${(props) =>
        props.theme.breakPoints.tablet}) {
      margin-bottom: 2rem;
    }
  }
  h3 {
    margin-bottom: 3rem;
    text-align: center;
  }
  p {
    @media only screen and (max-width: ${(props) =>
        props.theme.breakPoints.tablet}) {
      margin-bottom: 5rem;
    }
  }
`;

export default DoCard;
