import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const DoctorInfo = ({ firstName, lastName, avatar, speciality }) => {
  return (
    <Root>
      <Photo src={avatar} alt="avatar" width={60} height={60} />
      <div>
        <Name>
          {firstName}, {lastName}
        </Name>
        <Speciality>{speciality}</Speciality>
      </div>
    </Root>
  );
};

export default DoctorInfo;

const Root = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Name = styled.div``;
const Speciality = styled.div`
  color: rgba(0, 0, 0, 0.5);
`;
const Photo = styled(Image)`
  border-radius: 100%;
`;
