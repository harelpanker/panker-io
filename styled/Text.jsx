import styled from 'styled-components';

export default styled.p`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 170%;
  color: ${(props) =>
    props.grey ? props.theme.colors.grey : props.theme.colors.white};
  text-align: ${(props) => (props.align ? props.align : 'left')};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    font-size: 1.4rem;
  }
`;
