import styled from 'styled-components';

export default styled.h4`
  margin: 2rem 0 1rem 0;
  font-weight: 400;
  font-size: 4rem;
  line-height: 5.6rem;
  text-transform: uppercase;
  text-align: ${(props) => (props.align ? props.align : 'left')};
  color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    font-size: 3.6rem;
    line-height: 4.2rem;
  }
`;
