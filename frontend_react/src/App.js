import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Footer, Header, Skills, Work, Blog } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Navbar />
              <Header />
              <About />
              <Work />
              <Skills />
              <Footer />
            </>
          }
        />
        <Route exact path='/blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
