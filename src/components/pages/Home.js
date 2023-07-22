import React from 'react'
import Header from '../layouts/Header'
import Main from '../layouts/Main'
import Aside from '../layouts/Aside'

const Home = () => {
  return (
    <div>
      <Header/>
      <div>
        <Aside></Aside>
        <Main></Main>
      </div>
    </div>
  )

}

export default Home