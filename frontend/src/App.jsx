/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './Component/Users'
import CreateUser from './Component/CreateUser'
import UpdateUser from './Component/UpdateUser'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Users} />
        <Route path='/create' Component={CreateUser} />
        <Route path='/updateUser/:id' Component={UpdateUser} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
