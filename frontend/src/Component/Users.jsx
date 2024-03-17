/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../App.css'

const Users = () => {
    const [users, setUsers] = useState([{
        Name: 'Deshan', Email: "deshan@gmail.com", Age: 25
    }])
  return (
    <div id='user'>
        <div className='container'>
            
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
                                    <button>Edit</button>
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