const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')

const app = express()
app.use(cors())
app.use(express.json())

//Connection with mongoDb database
mongoose.connect("mongodb://127.0.0.1:27017/crud")

//API for get method in Add user
app.get('/',(req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//API for get method in update
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//Create route for update the table
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, 
        {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//API for delete record
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndDelete({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//Api for new record
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3002, () => {
    console.log("server is Running on port number 3002")
})