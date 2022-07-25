import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

const ElectonicCardSection = ({title, Icon, children}) => {
  return (
    <Root>
      <IconWrapper className="icon-wrapper">
        {Icon}
      </IconWrapper>
      <Info>
        <Title>{title}</Title>
        <Line />
        <Text>
          {children}
        </Text>
      </Info>
    </Root>
  )
}

export default ElectonicCardSection

const IconWrapper = styled.div`
  width: 133px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Line = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: #EBE7FF;
`
const Root = styled.div`
  width: 540px;
  height: 185px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #EBE7FF;
  cursor: pointer;
  &:hover {
    outline: 2px solid #50caff;
  }
  &:hover ${IconWrapper} {
    background-color: #50caff;
  }
  &:hover ${Line} {
    background-color: #50caff;
  }
  &:hover ${IconWrapper} svg {
    fill: #ffffff;
  }
`
const Info = styled.div`
  padding: 20px 36px;
  width: 405px;
`

const Title = styled.div`
  font-size: 26px;
`
const Text = styled.div`
  font-size: 16px;
  margin-top: 10px;
`