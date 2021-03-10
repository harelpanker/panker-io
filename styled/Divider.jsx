import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) =>
    props.white ? props.theme.colors.white : props.theme.colors.black};
`;
