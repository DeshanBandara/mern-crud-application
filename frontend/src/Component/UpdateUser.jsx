/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css'

const UpdateUser = () => {
  return (
    <div id='create'>
        <div className='containerCreate'>
            <form>
                <h2>Update user</h2>
                <div className='addD'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter name' className='formControl' />
                </div>
                <div className='addD'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' placeholder='Enter name' className='formControl' />
                </div>
                <div className='addD'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' placeholder='Enter name' className='formControl' />
                </div>
                <button className='submitBtn'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser