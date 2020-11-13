import styled from 'styled-components';

export default styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3.6rem;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;
