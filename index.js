const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')

require('dotenv').config()

const { getAllEmployee, getEmployee ,addEmployee, editEmployee, deleteEmployee } = require('./routes/app.js')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

db.connect(err => {
    if(err) {
        console.log(err)
        throw err
    }
    else {
        console.log('Database is connected !')
    }
})

global.db = db

/// API

app.get('/emp', getAllEmployee)
app.get('/emp/:id', getEmployee)
app.post('/add', addEmployee)
app.put('/emp/:id', editEmployee)
app.delete('/emp/:id', deleteEmployee)



app.listen(PORT, () => {
    console.log('Port is working')
})