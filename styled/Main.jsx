import styled from 'styled-components';

export default styled.main`
  padding: 10rem 0;
  background: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: 3rem 0;
  }
`;
