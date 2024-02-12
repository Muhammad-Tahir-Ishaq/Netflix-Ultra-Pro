const express = require('express')
const connectToMongoDb = require('./config/mongodb')
const cors = require('cors')
const router = require('./routes')

const app = express()
app.use(express.json())
// add middleware to parse form data instead of JSON
app.use(express.urlencoded({ extended: true }));
// cors
app.use(cors())

// use a static folder
app.use(express.static('public'));
const port = 3000

connectToMongoDb()

app.get('/', (req, res) => {
    res.send('Hello World! from node js backend server')
})

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

// mei tum se tumhara pura project start se end tak puch rha hu