import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Product from './pages/Product'
import Header from './components/layout/Header'
import NotFound from './components/NotFound'
import ProtectedAuth from './components/auth/ProtectedAuth'
import Cart from './components/cart/Cart'

function App() {
  

  return (
    <section className='grid grid-rows-[auto_1fr] min-h-screen'>
      <Header/>

      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedAuth/>} >
          <Route path='/purchases' element={<Purchases/>}/>
        </Route>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Cart/>
    </section>
  )
}

export default App
