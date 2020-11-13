import styled from 'styled-components';

export default styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
`;
