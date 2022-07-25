import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import ElectronicCardSection from './ElectronicCardSection' 
import { Add, Analysis, History, Info } from '../icons/card'

const ElectonicCardSections = () => {
  return (
    <Root>
      <ElectronicCardSection title="Информация о пациенте" Icon={<Info />}>
        <ul>
          <li>Ваши личные данные</li>
          <li>Рекомендации врачей</li>
          <li>История болезней</li>
        </ul>
      </ElectronicCardSection>
      <ElectronicCardSection title="Результаты анализов" Icon={<Analysis />}>
        Вы можете узнать здесь результаты своих анализов
      </ElectronicCardSection>
      <ElectronicCardSection title="Добавить информацию" Icon={<Add />}>
        Добавляйте в свою электронную медицинскую карту новые данные
      </ElectronicCardSection>
      <ElectronicCardSection title="История приемов" Icon={<History />}>
        Вся информация о полученных услугах за все время хранится здесь
      </ElectronicCardSection>
    </Root>
  )
}

export default ElectonicCardSections

const Root = styled.div`
  display: grid;
  grid-template-columns: 540px 540px;
  grid-template-rows: 185px 185px;
  gap: 16px;
  margin-top: 15px;
`

const List = styled.ul`
  list-style-type: none;
  padding-left: 15px;
`

const ListItem = styled.li`
  margin-top: 7px;
  position: relative;
  &::after {
    content: '',
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #50caff;
  }
`