import styled from 'styled-components';

export default styled.p`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.8rem;
  color: ${(props) =>
    props.grey ? props.theme.colors.grey : props.theme.colors.white};
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;
