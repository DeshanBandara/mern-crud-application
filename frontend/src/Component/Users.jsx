/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([{
        Name: 'Deshan', Email: "deshan@gmail.com", Age: 25
    }])
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
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td>
                                    <Link to="/updateUser"> <button>Edit</button></Link>
                                    <button>Delet</button>
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