class TaskModel {
  static tasks = []

  static list() {
    return this.tasks
  }

  static listById(id) {
    return this.tasks.find(task => task.id == id)
  }

  static create(data) {
    if (!data || !data.title || !data.description) {
      return null;
    }

    const newTask = {
      id: this.tasks.length + 1,
      title: data.title,
      description: data.description,
      completed: false
    }

    this.tasks.push(newTask);
    return newTask
  }

  static update(id, newdata) {
    const allowedFields = ['title', 'description', 'completed']
    const index = this.tasks.findIndex(task => task.id == id)

    if (index !== -1) {
      const filteredData = Object.keys(newdata)
        .filter(key => allowedFields.includes(key))
        .reduce((obj, key) => {
          obj[key] = newdata[key]
          return obj
        }, {})

      this.tasks[index] = { ...this.tasks[index], ...filteredData }
      return this.tasks[index]
    }
    return null
  }

  static delete(id) {
    const index = this.tasks.findIndex(task => task.id == id)

    if (index !== -1) {
      const deletedTask = this.tasks.splice(index, 1)
      return deletedTask
    }
    
    return null
  }
}

module.exports = TaskModel