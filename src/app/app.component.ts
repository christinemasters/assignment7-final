import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Router } from '@angular/router';

// Component decorator references html template and css files
@Component({
  selector: 'app-root', //HTML tag it will replace when it loads
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// component class contains properties which are in scope for the template
export class AppComponent {
  title = 'CheckMate';
  subtext = 'A friend to help you check the boxes';

  // @Input() todo: { _id: number; title: string; description: string };
  // @Input() todoList: { _id: number; title: string; description: string };

  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    console.log('home');
    this.router.navigate(['/']);
  }
}
