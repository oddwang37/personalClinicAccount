import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import Calendar from 'react-calendar';

import { Navigation } from '../components'


const Profile = () => {
  return (
    <div>
      <Wrapper>
        <Navigation />
      </Wrapper>
    </div>
  )
}

export default Profile

const Root = styled.div`
`
const Wrapper = styled.div`
  display: flex;
`
