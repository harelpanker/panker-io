import { useState, useEffect } from 'react';
import Client from './Client';
import styled from 'styled-components';
import Section from '../styled/Section';
import Container from '../styled/Container';
import Heading2 from '../styled/Heading2';
import Strong from '../styled/Strong';

import Slider from 'react-slick';

import clients from '../public/clients';
import useWindowDimensions from '../hooks/useWindowDimensions';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
}

const Clients = () => {
  const [startWidth, setStartWidth] = useState(null);
  const { width } = useWindowDimensions();
  useEffect(() => setStartWidth(width), []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: startWidth < 1350 && <Arrow />,
    prevArrow: startWidth < 1350 && <Arrow />,
  };

  return (
    <Section black>
      <Container>
        <Heading2 data-aos='fade-right'>
          My <Strong>Clients</Strong>
        </Heading2>
        <SliderWrapper>
          <StyledImg src='/images/quote.svg' alt='Quote' loading='lazy' />
          <Slider {...settings}>
            {clients.map((client) => (
              <Client key={client.id} {...client} />
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </Section>
  );
};

const SliderWrapper = styled.div`
  margin-top: 7rem;
  position: relative;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    margin-top: 4rem;
  }
`;
const StyledImg = styled.img`
  height: 40rem;
  opacity: 0.3;
  position: absolute;
  top: -14rem;
  right: 3rem;
  color: ${(props) => props.theme.colors.white};

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.mobile}) {
    height: 20rem;
    top: -6rem;
    right: 0rem;
  }
`;

export default Clients;
