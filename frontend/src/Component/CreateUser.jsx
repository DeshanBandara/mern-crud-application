/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate ()

    const Submit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3002/createUser`, {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div id='create'>
        <div className='containerCreate'>
            <form onSubmit={Submit}>
                <h2>Add user</h2>
                <div className='addD'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter name' className='formControl' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='addD'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' placeholder='Enter name' className='formControl' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='addD'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' placeholder='Enter name' className='formControl' onChange={(e) => setAge(e.target.value)}/>
                </div>
                <button className='submitBtn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser