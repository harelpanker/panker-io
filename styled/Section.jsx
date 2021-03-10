import styled from 'styled-components';

export default styled.section`
  padding: ${(props) => (props.noPadding ? '0' : '10rem 0')};
  background-color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: ${(props) => (props.noPadding ? '0' : '7rem 0')};
  }
`;
