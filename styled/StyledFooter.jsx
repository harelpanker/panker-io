import styled from 'styled-components';

export default styled.footer`
  padding: 10rem 0;
  background: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};
  border-bottom: 0.5rem solid ${(props) => props.theme.colors.blue};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: 3rem 0;
  }
`;
