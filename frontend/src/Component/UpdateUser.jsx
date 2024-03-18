/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../App.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios  from 'axios'


const UpdateUser = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate ()

    useEffect(() => {
        axios.get(`http://localhost:3002/getUser/${id}`)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    }, [id])

    const Update = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3002/updateUser/${id}`, {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div id='create'>
        <div className='containerCreate'>
            <form onSubmit={Update}>
                <h2>Update user</h2>
                <div className='addD'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter name' className='formControl' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='addD'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' placeholder='Enter name' className='formControl' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='addD'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' placeholder='Enter name' className='formControl' value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
                <button className='submitBtn'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser