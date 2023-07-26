import React from 'react'
import Header from '../layouts/Header'
import Main from '../layouts/Main'
import Aside from '../layouts/Aside'
import { styled } from 'styled-components'

const Home = () => {
  return (
    <>
      <Header/>  
      <AsideWhithMain>
        <Aside/>
        <Main/>        
      </AsideWhithMain>
    </>
  )

}

export default Home

const AsideWhithMain = styled.div`
  display: flex;
`