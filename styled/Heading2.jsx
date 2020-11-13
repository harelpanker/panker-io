import styled from 'styled-components';

export default styled.h2`
  margin-bottom: 3rem;
  font-weight: 400;
  font-size: 6.2rem;
  line-height: 7rem;
  text-transform: uppercase;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    font-size: 4.2rem;
    line-height: 5rem;
  }
`;
