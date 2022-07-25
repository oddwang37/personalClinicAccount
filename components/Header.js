import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

const Header = ({children}) => {
  return (
    <Root>
      <Title>
        {children}
      </Title>
      <Icons>
        <Image src="/svg/header/search.svg" alt="Search" width={18} height={18} />
        <Image src="/svg/header/notif.svg" alt="Notifications" width={18} height={18} />
        <Image src="/svg/header/eye.svg" alt="Hide" width={18} height={18} />
        <ProfileMenu>
          <Image src="/images/avatar.png" alt="Your avatar" width={50} height={50} />
          <Image src="/svg/header/show.svg" alt="Show info" width={16} height={16} />
        </ProfileMenu>
      </Icons>
    </Root>
  )
}

export default Header

const Root = styled.header`
  padding: 5px 40px;
  background-color: #50caff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  color: #fff;
  font-size: 28px;
`

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: flex-end;
  gap: 20px;
`

const ProfileMenu = styled.div`
  display: flex;
  gap: 7px;
`