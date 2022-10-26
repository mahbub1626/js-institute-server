const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const categories = require('./data/coursesCategory.json');
const courses = require('./data/courses.json')

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category = news.filter(n => n.category_id === id);
    res.send(category);

})

app.get('/courses', (req, res)=>{
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedCourses = courses.find(c => c._id === id);
    res.send(selectedCourses);
})

app.listen(port, () => {
    console.log(`JS listener port: ${port}`)
})