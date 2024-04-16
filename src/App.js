import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import ProductsList from './pages/ProductsList'
import ProductView from './pages/ProductView'
import Cart from './pages/Cart'
import Layout from './Layout'
import UserContext from './UserContext'

const App = () => {

  const [isLogged, setIsLogged] = useState(false)
  const [profile, setProfile] = useState('')
  //check userdata/accesstoken present in loaclstorage useEffect
  useEffect(()=>{
    const accessToken = localStorage.getItem("unique_id")

    if (accessToken) {
      setIsLogged(true)
    }
  },[isLogged])

  const values = {
    isLogged ,
    setIsLogged,
    profile,
    setProfile
  }
  return (
    <div>
      <UserContext.Provider value={ values }>
      <Layout >
        <Routes>
          <Route path='/' element={<ProductsList />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={ <ProductsList />} />
          <Route path='/productview/:id' element={<ProductView />} />
          <Route path='/cart/:id' element={<Cart />} />
        </Routes>
    </Layout>
      </UserContext.Provider>
  </div>
  )
}

export default App