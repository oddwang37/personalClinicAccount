import Head from 'next/head';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ru';

import Button from './UI/Button';
import DoctorInfo from './DoctorInfo';

const AppointmentCard = ({data}) => {

  const {date, clinic, clinicAddress, firstName, lastName, avatar, speciality} = data;

  const momentDate = moment(date);
  momentDate.locale('ru')
  const formattedDate = momentDate.calendar();
  return (
    <Root>
      <div>
        <Date>{formattedDate}</Date>
        <Clinic>
          {clinic} {','} {clinicAddress}
        </Clinic>
        <DoctorInfo firstName={firstName} lastName={lastName} avatar={avatar} speciality={speciality}></DoctorInfo>
      </div>
      <Button>Отменить</Button>
    </Root>
  );
};

export default AppointmentCard;

const Root = styled.header`
  padding: 20px;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  width: 450px;
  height: 190px;
  justify-content: space-between;
`;

const Date = styled.div`
  font-size: 16px;
`;

const Clinic = styled.div`
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 5px;
  margin-top: 10px;
`;
