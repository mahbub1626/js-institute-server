const express = require('express');
const app = express();
const cors = require('cors');


const categories = require('./data/coursesCategory.json');
const course = require('./data/courses.json')

get.use(cors())

const port = 5000;

app.get('/', (req, res)=>{
    res.send('Hello world')
})
app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.listen(port, ()=>{
    console.log(`JS listener port: ${port}`)
})