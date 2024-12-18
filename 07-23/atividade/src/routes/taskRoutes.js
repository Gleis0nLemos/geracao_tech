const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

// list task
router.get('/', taskController.list)

// list per id
router.get('/:id', taskController.listById)

// create task
router.post('/', taskController.create)

// update task
router.put('/:id', taskController.update)

// delete task
router.delete('/:id', taskController.delete)

module.exports = router