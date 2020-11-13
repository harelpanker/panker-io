import styled from 'styled-components';

export default styled.header`
  padding: 10rem 0;

  @media only screen and (max-width: ${(props) => props.theme.breakPoints.md}) {
    padding: 5rem 0;
  }
`;
