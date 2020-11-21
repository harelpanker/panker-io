import styled from 'styled-components';

const HeroDescription = () => {
  return (
    <StyledMain>
      <Description data-aos='fade-up'>
        Hello! My name is Harel, and I'm a passionate web developer and designer
        based in Vienna, Austria.
      </Description>
      <Description data-aos='fade-up'>
        As a freelancer, my knowledge is vast, from the basics of web
        development, HTML-CSS-JavaScrip to a bit more complex topics.
      </Description>
      <Description data-aos='fade-up'>
        I use the most modern tools to build my clients‘ website. This gives
        them the edge in the competitive investment of the web.
      </Description>
    </StyledMain>
  );
};
const StyledMain = styled.main`
  background-color: ${(props) => props.theme.colors.black};
  padding: 0 2rem;
  padding-bottom: 15rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;
const Description = styled.h2`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-weight: 500;
  font-size: 3rem;
  margin: 0 auto;
  line-height: 170%;
  max-width: 99rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    font-size: 2rem;
  }
`;

export default HeroDescription;
