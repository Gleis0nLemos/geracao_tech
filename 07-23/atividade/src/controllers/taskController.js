const taskModel = require('../models/taskModel')

class TaskController {
  
  static list(req, res) {
    res.status(200).json(taskModel.list());
  }
  
  static listById(req, res) {
    const id = req.params.id
    const task = taskModel.listById(id)
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  }
  
  static create(req, res) {
    const newTask = taskModel.create(req.body)

    if (!newTask) {
      res.status(400).json({ message: 'Invalid task data' });
    }
    res.status(201).json({
      message: 'Task created successfully',
    });
  }
  
  static update(req, res) {
    const id = req.params.id
    const newdata = req.body

    const updatedTask = taskModel.update(id, newdata)

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({
      message: 'Task updated successfully',
      updatedTask,
    }) 
  }

  static delete(req, res) {
    const id = req.params.id

    const deletedTask = taskModel.delete(id)
    
    if (!deletedTask) {
      return res.status(404).json({
        message: 'Task not found'
      })
    } 
    
    res.status(200).json({ 
      message: 'Task deleted successfully',
      deletedTask,
    });
  }

}

module.exports = TaskController