import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0px); }
`;

export default styled.h1`
  margin: 2rem 0 1rem 0;
  font-weight: ${(props) => (props.weight ? props.weight : '700')};
  font-size: 7.2rem;
  line-height: 8rem;
  text-transform: uppercase;
  animation: ${slideIn} 0.6s ease-in-out forwards;
  text-align: ${(props) => (props.align ? props.align : 'center')};
  color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    font-size: 4.8rem;
    line-height: 5.4rem;
  }
`;
