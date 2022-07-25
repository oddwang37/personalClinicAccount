import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { Container } from './index.js';
import {Navigation, Header} from '../components';

const Appointments = () => {
  return (
    <div>
      <FlexWrap>
        <Navigation />
        <div>
        </div>
      </FlexWrap>
      </div>
  )
}

export default Appointments

const Root = styled.div`
  padding-top: 18px;
`
const FlexWrap = styled.div`
  display: flex;
`
const BackLink = styled.div`
  display: flex;
  gap: 14px;
  font-size: 16px;
`