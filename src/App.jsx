import { Box, Container } from '@chakra-ui/react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact/contact'
import Sign from './pages/sign/sign'
import ScrollToTop from 'react-scroll-to-top'
import About from './components/about/About'
import Admin from './pages/Admin/Admin'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Likes from './pages/Likes'
import Product from './pages/product'
import Shop from './pages/Shop'
import Test from './pages/Test/Test'

function App() {

  return (
    <Box>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/sign' element={<Sign />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/likes' element={<Likes />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/test' element={<Test />}></Route>

        {/* for page not found  */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <ScrollToTop style={{ paddingLeft: '6px', borderRadius: '50px', }} smooth />
    </Box>    
  )
}

export default App
