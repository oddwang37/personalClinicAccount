import styled from 'styled-components';
import Image from 'next/image';

import NavItem from './NavItem';
import Button from './UI/Button';
import { Booksvg, Heart, Messages, Stethoscope, Test, Help } from './icons/nav';

const Navigation = () => {
  return (
    <Root>
      <NavLinks>
        <Logotype>Логотип</Logotype>
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
        <Button>Подать заявку</Button>
      </NavLinks>
      <Footer>
        <NavItem title="Помощь">
          <Help />
        </NavItem>
        <Image src="/images/logo.png" width={115} height={20} alt="appvelox logo" />
      </Footer>
    </Root>
  );
};

export default Navigation;

const Root = styled.div`
  background-color: #003b72;
  color: #fff;
  width: 220px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const NavLinks = styled.div`
  margin-bottom: 10px;
`;
const Logotype = styled.div`
  height: 60px;
  padding: 20px 0 30px 20px;
  padding-right: 110px;
`;
const Footer = styled.div`
  padding-left: 25px;
  padding-bottom: 20px;
`;
