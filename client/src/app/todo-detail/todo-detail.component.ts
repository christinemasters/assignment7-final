import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  todo: { _id: number; text: string; description: string };

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  goBack(): void {
    //navigate back to the previous page
    this.router.navigate(['todos']);
  }

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodoById(id).subscribe((data: any) => {
      this.todo = data;
    });
  }
}
