import Link from 'next/link';
import styled from 'styled-components';
import Section from '../styled/Section';
import Container from '../styled/Container';
import Heading3 from '../styled/Heading3';
import Strong from '../styled/Strong';
import Text from '../styled/Text';
import Button from '../styled/Button';

const CTA = () => {
  return (
    <Section black>
      <Container>
        <Grid>
          <Heading3 white>
            Ready to design
            <br />
            <Strong>your brand?</Strong>
          </Heading3>
          <Text align='center'>
            Wanna start working together? do you have a question? or just say
            hi? fill free to content me!
          </Text>
          <Link href='/contact'>
            <Button>Contact Me</Button>
          </Link>
        </Grid>
      </Container>
    </Section>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  justify-items: center;

  max-width: 65rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
`;

export default CTA;
