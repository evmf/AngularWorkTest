import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoService } from './to-do.service';
import { UserService } from './user.service';
import { UserTodoComponent } from './user-todo/user-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ToDoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
