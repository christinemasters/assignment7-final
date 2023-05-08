const { Todo } = require("../models");

class TodoService {
  static list() {
    return Todo.find({});
  }

  static find(id) {
    const filter = { _id: id };
    return Todo.findOne(filter);
  }

  static async create(data) {
    const todo = new Todo({
      text: data.text,
      description: data.description,
      done: data.done,
    });
    await todo.save();
    return todo;
  }

  static async toggleDone(id) {
    const todo = await TodoService.find(id);
    if (!todo) {
      return null;
    }
    todo.done = !todo.done;
    await todo.save();
    return todo;
  }

  static async update(id, data) {
    const filter = { _id: id };
    const update = {
      text: data.text,
      description: data.description,
      done: data.done,
    };
    return Todo.findOneAndUpdate(filter, update, { new: true });
  }

  static delete(id) {
    const filter = { _id: id };
    return Todo.findOneAndDelete(filter);
  }
}

module.exports = TodoService;
