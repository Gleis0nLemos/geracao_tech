class Users {

  static usersList = [
    {
      id: 1,
      name: 'Maria',
    },
    {
      id: 2,
      name: 'Pedro',
    }
  ]

  static list() {
    return this.usersList;
  }

  static getById(id) {
    return this.usersList.find(user => user.id == id);
  }

  static create(user) {
    this.usersList.push(user);
  }

  static update(id, userUpdated) {
    const index = this.usersList.findIndex(user => user.id == id);

    if (index !== -1) {
      this.usersList[index] = { ...this.usersList[index], ...userUpdated }
    } else {
      return null
    }
  }

  static delete(id) {
    const index = this.usersList.findIndex(user => user.id == id);

    if (index !== -1) {
      const deletedUser = this.usersList.splice(index, 1);
      return deletedUser
    }

    return null
  }
}

module.exports = Users;