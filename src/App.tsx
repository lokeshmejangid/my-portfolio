import React, { useEffect, useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from './Components/Home'
import Preloader from './Components/Preloader'
import { GlobalStyle } from './GlobalStyle'
import { Theme } from './Theme';
import Contact from './Pages/Contact'
import About from './Pages/About'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Projects from './Pages/Projects'

const App = () => {
  const [load, setLoad] = useState<boolean>(true);

  /**
   * Set Preloader value
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Preloader load = {load} />
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/projects' element={ <Projects /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App