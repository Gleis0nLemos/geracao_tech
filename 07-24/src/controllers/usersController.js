const Users = require('../models/usersModel');

class UsersController {

  static list(req, res) {
    res.status(200).json(Users.list());
  }

  static getById(req, res) {
    const id = req.params.id;
    const user = Users.getById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: 'User not found'
      })
    }
  }

  static create(req, res) {
    const newUser = req.body;
    Users.create(newUser);

    res.status(201).json({
      message: 'User created successfully'
    })
  }

  static update(req, res) {
    const id = req.params.id;
    const updatedUser = req.body;
    const usersUpdated = Users.update(id, updatedUser);

    if (!usersUpdated) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    res.status(200).json({
      message: 'User updated successfully'
    })
  }

  static delete(req, res) {
    const id = req.params.id;
    const deletedUser = Users.delete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    res.status(200).json({
      message: 'User deleted successfully',
      deletedUser,
    })
  }
}

module.exports = UsersController;