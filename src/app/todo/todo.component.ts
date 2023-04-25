import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  showDetails(id: number) {
    this.router.navigate(['/todo', id]);
  }
}
