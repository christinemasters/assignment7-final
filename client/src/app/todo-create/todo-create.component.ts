import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent {
  todo: any;
  constructor(private todoService: TodoService) {
    this.todo = {
      text: '',
      description: '',
      done: false,
    };
  }

  createTodo() {
    console.log(this.todo);
    this.todoService.createNewTodo(this.todo).subscribe((data: any) => {
      console.log(data);

      this.todo = {
        text: '',
        description: '',
        done: false,
      };

      this.todoService.refreshNeeded.next(true);
    });
  }
}
