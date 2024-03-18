/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import axios from "axios"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3002`)
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    })

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3002/deleteUser/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <div id='user'>
        <div className='containerUsers'>
            <Link to="/create"> <button className='addBtn'>Add +</button></Link>
            <table className='UserTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/updateUser/${user._id}`}> <button className='editBtn'>Edit</button></Link>
                                    <button className='deleteBtn' onClick={(e) => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users