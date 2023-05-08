import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: any;

  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit() {}

  showDetails(id: number) {
    this.router.navigate(['/todo', id]);
  }

  onToggleDone() {
    this.todo.done = !this.todo.done;
    console.log(this.todo);
    this.todoService.toggleDone(this.todo).subscribe((data: any) => {});
  }
  onDelete() {
    this.todoService.deleteTodoById(this.todo).subscribe((data: any) => {
      this.todoService.refreshNeeded.next(true);
    });
  }
}
