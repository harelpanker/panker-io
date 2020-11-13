import styled from 'styled-components';
import Main from '../../styled/Main';
import Container from '../../styled/Container';
import Text from '../../styled/Text';
import Card from './Card';

import pricingList from '../../public/pricing';

const Pricing = () => {
  return (
    <Main>
      <Container>
        <PriceGrid>
          {pricingList.map((price) => (
            <Card key={price.id} {...price} />
          ))}
        </PriceGrid>
        <Text grey align='center'>
          *All packages come with a Є39/mth Maintenance + Hosting Plan
        </Text>
      </Container>
    </Main>
  );
};

const PriceGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1.5rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 55rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export default Pricing;
