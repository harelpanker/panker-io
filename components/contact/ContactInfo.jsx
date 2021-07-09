import styled from 'styled-components';
import Heading1 from '../../styled/Heading1';
import Strong from '../../styled/Strong';

const ContactInfo = () => {
  return (
    <StyledFlex>
      <Heading1 align='left' weight='500' black>
        Let's work <Strong>together</Strong>
      </Heading1>
      <StyledLink href='mailto:harelpanker@gmail.com'>
        harelpanker@gmail.com
      </StyledLink>
      <StyledLink href='tel:+4367763721016'>+43 677 63721016</StyledLink>
    </StyledFlex>
  );
};
const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.darkBlue};
  text-decoration: underline;
  font-size: 1.8rem;
  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export default ContactInfo;
