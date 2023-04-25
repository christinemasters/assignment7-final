import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todoList = [
    {
      _id: 1,
      title: 'Laundry',
      description: 'Try to finish all the laundry and fold it',
    },
    { _id: 2, title: 'Taxes', description: 'Need to do the taxes in April' },
    {
      _id: 3,
      title: 'Homework',
      description: 'Have to finish homework for Harvard and University of Iowa',
    },
    {
      _id: 4,
      title: 'New video',
      description: 'Must create a new video for work',
    },
  ];

  constructor() {}

  listTodos() {
    return this.todoList;
  }

  getTodoById(id: number): any {
    return this.todoList.find((todo) => todo._id === id);
  }
}
