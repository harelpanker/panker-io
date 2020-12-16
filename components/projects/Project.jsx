import styled from 'styled-components';

const Project = ({ name, img, liveURL }) => {
  return (
    <CardLink
      className='card'
      href={liveURL}
      target='_blank'
      rel='noreferrer'
      data-aos='fade-up'>
      <CardBackground src={img} alt={name} />
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
  max-width: 30rem;
  min-height: 50rem;
  margin: 0 auto;

  &:hover img:first-child {
    transform: scale(1.05) translateZ(0);
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.breakPoints.tablet}) {
    width: 90%;
  }
`;

const CardBackground = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
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
  padding: 0 1rem 3rem 1rem;
  position: absolute;
  bottom: 0;
`;
const CardHeader = styled.h3`
  color: white;
  font-size: 3rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
`;

export default Project;
