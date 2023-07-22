import React from 'react'
import Header from '../layouts/Header'
import Main from '../layouts/Main'
import Aside from '../layouts/Aside'
import { styled } from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <Header/>
      <AsideWhithMain>
        <Aside/>
        <Main/>
      </AsideWhithMain>
    </Wrapper>
  )

}

export default Home

const Wrapper = styled.div`
  border: 3px solid red;
`
const AsideWhithMain = styled.div`
  border: 1px solid;
  display: flex;
`