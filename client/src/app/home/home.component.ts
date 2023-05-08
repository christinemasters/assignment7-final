import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todoList: { _id: number; title: string; description: string }[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    // this.todoList = this.todoService.listTodos();
    this.todoService.listTodos().subscribe((data: any) => {
      this.todoList = data;
    });

    this.todoService.refreshNeeded.subscribe(() => {
      this.todoService.listTodos().subscribe((data: any) => {
        this.todoList = data;
      });
    });
  }
}
