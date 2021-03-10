import styled from 'styled-components';

export default styled.div`
  max-width: ${(props) => (props.width ? props.width : '1280px')};
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    padding: 0 1rem;
  }
`;
