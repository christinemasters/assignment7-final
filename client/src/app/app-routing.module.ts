import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '', // default route
    component: HomeComponent,
  },
  {
    path: 'todo/:id',
    component: TodoDetailComponent,
  },
  {
    path: 'todos',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
