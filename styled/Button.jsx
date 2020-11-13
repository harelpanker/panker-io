import styled from 'styled-components';

export default styled.a`
  padding: 0.9rem 3rem;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 2.4rem;
  border: 1px solid ${(props) => props.theme.colors.black};
  display: inline-block;
  margin-top: 2rem;
  text-decoration: none !important;
  cursor: pointer;
  transition: 0.2s ease-in-out all !important;

  color: ${(props) =>
    props.black ? props.theme.colors.white : props.theme.colors.black};
  background-color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.white};

  &:hover {
    transform: translateY(-3px);
    color: ${(props) =>
      props.black ? props.theme.colors.black : props.theme.colors.white};
    background-color: ${(props) =>
      props.black ? props.theme.colors.white : props.theme.colors.blue};
  }
`;
