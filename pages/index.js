import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';

import { Header, AppointCard, Navigation, ElectronicCardSections} from '../components';

const Profile = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
      const result = fetch('https://62b1b2cac7e53744afbf0959.mockapi.io/appointments')
      .then((res) => res.json())
      .then(data => {
        setCards(data)
      });
  }, [])

  return (
    <div>
      <Head>
        <title>Мой профиль</title>
      </Head>
      <Wrapper>
        <Navigation />
        <Main>
          <Header>Мой профиль</Header>
          <Container>
            <Title>Записи на прием</Title>
            <Wrapper>
              <AppointmentsWrapper>
              {cards.slice(0, 2).map((item) => 
                <AppointCard data={item} key={item.id}/>
              )}
              </AppointmentsWrapper>
              <More>
                Ещё {cards.length} записи 
                <Link href="/appointments">
                  <a>Подробнее</a>
                </Link>
              </More>
            </Wrapper>
            <Title>Электронная карта</Title>
            <ElectronicCardSections />
          </Container>
        </Main>
      </Wrapper>
    </div>
  );
};

export default Profile;

const Root = styled.div``;

const Main = styled.main`
  width: 85%;
`

const Container = styled.main`
  padding-left: 20px;
  padding-right: 60px;
  padding-bottom: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  margin-left: 20px;
  margin-top: 10px;
`;

const AppointmentsWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
  margin-bottom: 5px;
`
const Wrapper = styled.div`
  display: flex;
`

const More = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

