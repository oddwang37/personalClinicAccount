import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import NavItem from './NavItem';
import { Booksvg, Heart, Messages, Stethoscope, Test} from './icons/nav';

const Navigation = () => {
  return (
    <Root>
      <Logotype>
        Логотип
      </Logotype>
      <NavItem title="Профиль">
        <Heart />
      </NavItem>
      <NavItem title="Врачи и клиники">
        <Stethoscope />
      </NavItem>
      <NavItem title="Сообщения">
        <Messages />
      </NavItem>
      <NavItem title="Тестирование">
        <Test />
      </NavItem>
      <NavItem title="Полезо знать">
        <Booksvg />
      </NavItem>
    </Root>
  )
}

export default Navigation

const Root = styled.div`
  background-color: #003B72;
  color: #fff;
  width: 220px;
`
const Logotype = styled.div`
  height: 60px;
  padding: 20px 0 30px 20px;
  padding-right: 110px;
`