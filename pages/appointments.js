import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';

import {Navigation, Header, AppointCard, CustomCalendar} from '../components';

const Appointments = ({data}) => {

  const getData = async () => {
    const { data } = await axios.get('https://62b1b2cac7e53744afbf0959.mockapi.io/appointments');
    console.log(data);
    return data;
  }

  return (
    <div>
      <Head>
        <title>Записи на прием</title>
      </Head>
      <FlexWrap>
        <Navigation />
        <Main>
           <Header>Мой профиль</Header>
           <Container>
            <BackLink>
              <Image src="/svg/back.svg" width={18} height={18} alt="left arrow"/>
              <Link href="/">
                <StyledLink>Мои записи</StyledLink>
              </Link>
            </BackLink>
            <FlexWrap70px>
              <div>
                <ShowAll>Показать все записи</ShowAll>
                <AppointmentsContainer>
                   {
                    data.map((item) => 
                      <AppointCard data={item} key={item.id}/>
                    )
                  }
                </AppointmentsContainer>
              </div>
              <CustomCalendar />
            </FlexWrap70px>
           </Container>
        </Main>
      </FlexWrap>
      </div>
  )
}

export async function getStaticProps() {
  console.log('Эта функция вызвалась');
  const { data } = await axios.get('https://62b1b2cac7e53744afbf0959.mockapi.io/appointments');
  console.log(data);
  return {
    props: {
      data
    }
  }
}

export default Appointments

const Root = styled.div`
  padding-top: 18px;
`
const FlexWrap = styled.div`
  display: flex;
`
const FlexWrap70px = styled.div`
  display: flex;
  gap: 70px;
`
const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
`
const BackLink = styled.div`
  display: flex;
  gap: 14px;
  font-size: 16px;
  margin-left: 20px;
`
const Container = styled.main`
  padding: 15px 60px 10px 20px;
`;
const Main = styled.main`
  width: 85%;
`
const ShowAll = styled.div`
  color: #50CAFF;
  text-decoration: underline;
  margin-bottom: 15px;
  text-align: right;
`
const AppointmentsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`