import styled from 'styled-components';

const Member = ({ name, img, roll }) => {
  return (
    <StyledMember data-aos='fade-up'>
      <StyledImg src={img} alt={name} loading='lazy' />
      <Name>{name}</Name>
      <Roll>{roll}</Roll>
    </StyledMember>
  );
};

const StyledMember = styled.li`
  text-align: center;
`;
const StyledImg = styled.img`
  height: 40rem;
  border-radius: 0.5rem;
`;
const Name = styled.h3`
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 3rem;
  font-size: 3rem;
`;
const Roll = styled.p`
  text-transform: uppercase;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.grey};
`;

export default Member;
