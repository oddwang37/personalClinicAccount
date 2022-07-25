import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

const NavItem = ({title, children}) => {
  return (
    <Root>
      {children}
      {title}
    </Root>
  )
}

export default NavItem

const Root = styled.div`
  background-color: #003B72;
  color: #fff;
  padding: 14px 0 14px 20px;
  display: flex;
  gap: 14px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    border-left: 3px solid #7761ff;
    color: #7761ff
  }
  &:hover svg path {
    fill: #7761ff;
  }
  
`
