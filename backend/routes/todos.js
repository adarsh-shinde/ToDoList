const express = require ('express');
const Todo = require('../models/todoModel');
const{
    createTodo,
    getTodos,
    getTodo,
    deleteTodo,
    updateTodo
} = require('../controllers/todosController')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router();


// require auth for all todos routes
router.use(requireAuth);


// GET all todos
router.get('/',getTodos);

// GET a single todo
router.get('/:id',getTodo)

// POST a new todo
router.post('/', createTodo)

// DELETE a todo
router.delete('/:id',deleteTodo)

// UPDATE a todo
router.patch('/:id',updateTodo ) 




module.exports = router; 