import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TodoService {
  // apiURL = 'http://localhost:8080/api/v1/todos';
  apiURL = '/api/v1/todos';
  refreshNeeded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  listTodos() {
    return this.http.get(this.apiURL);
  }

  getTodoById(id): any {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  createNewTodo(todo: any) {
    return this.http.post(this.apiURL, todo);
  }

  toggleDone(todo: any) {
    return this.http.put(`${this.apiURL}/toggle/${todo._id}`, todo);
  }

  deleteTodoById(todo: any) {
    return this.http.delete(`${this.apiURL}/${todo._id}`);
  }
}
