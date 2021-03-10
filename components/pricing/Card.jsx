import styled from 'styled-components';

const Card = ({ title, img, price, tags }) => {
  return (
    <StyledCard>
      <CardHead>
        <Icon>
          <img src={img} alt={title} />
        </Icon>
        <Title>{title}</Title>
        <Price>€{price}</Price>
      </CardHead>
      <CardBody>
        {tags.map((tag, i) => (
          <>
            <li key={tag.id}>{tag.tag}</li>
            {i < tags.length - 1 && <Divider />}
          </>
        ))}
      </CardBody>
    </StyledCard>
  );
};
const CardBody = styled.ul`
  padding: 2rem;

  li {
    padding: 1rem;
    font-size: 1.6rem;
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  opacity: 0.5;
`;
const StyledCard = styled.div`
  box-shadow: 0 10px 24px 0 rgba(82, 91, 115, 0.12);
  border-radius: 0.5rem;
  text-align: center;
`;
const CardHead = styled.div`
  border-bottom: 2px solid black;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Icon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
const Title = styled.h3`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;
const Price = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.darkBlue};
`;

export default Card;
