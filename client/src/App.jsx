
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SearLayout from './pages/SearLayout'
import MyBookihgs from './pages/MyBookihgs'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const isAdminRute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster / >
    {!isAdminRute &&  <Navbar />}
      
       <Routes >
          <Route  path='/' element={<Home/>}/>
          <Route  path='/movies' element={<Movies/>}/>
          <Route  path='/movies/:id' element={<MovieDetails/>}/>
          <Route  path='/movies/:id/:date' element={<SearLayout/>}/>
          <Route  path='/my-bookings' element={<MyBookihgs/>}/>
          <Route  path='favorite' element={<Favorite/>}/>
       </Routes>
       {!isAdminRute &&  <Footer />}
    </>
  )
}

export default App