import Image from 'next/image';
import styled from 'styled-components';

const Project = ({ name, img, liveURL }) => {
  return (
    <CardLink
      // className='card'
      href={liveURL}
      target='_blank'
      rel='noreferrer'
      data-aos='fade-up'>
      <CardBackground src={img} alt={name} layout='fill' />
      <CardContent>
        <CardHeader>{name}</CardHeader>
      </CardContent>
    </CardLink>
  );
};

const CardLink = styled.a`
  list-style: none;
  position: relative;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  min-height: 50rem;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;

  &:hover img:first-child {
    transform: scale(1.05) translateZ(0);
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    width: 80%;
    max-width: 28rem;
  }
`;

const CardBackground = styled(Image)`
  height: 100%;
  width: 100%;
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;
`;
const CardContent = styled.div`
  left: 0;
  padding: 2rem;
  position: absolute;
  bottom: 0;
`;
const CardHeader = styled.h3`
  color: white;
  font-size: 3.5rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
`;

export default Project;
