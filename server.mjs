import express from 'express';
import morgan from 'morgan';
import bp from 'body-parser';

const app = express();

// Parse POST body to JSON
app.use(bp.json());

// Logging middleware
app.use(morgan('dev'))

const db = []

// Setting up routes and methods
app.post('/todo', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text
    }

    db.push(newTodo)

    res.json(newTodo)
})

app.get('/todo', (req, res) => {
    res.json(db)
})

app.get('/todo/:id', (req, res) => {
    const todo = db.find((cur) => cur.id === +req.params.id);
    console.log("Here: ", todo)
    res.json(todo);
})

app.listen(8000, () => {
    console.log(`Server on https://localhost:8000`)
})