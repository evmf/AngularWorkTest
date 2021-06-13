import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  readonly APIUrl = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  getToDosForUser(id:any) : Observable<ToDosModel[]> {
    return this.httpClient.get<ToDosModel[]>(this.APIUrl + "/todos?userId=" + id);     
  }
}

//class to help out with formating of data - easier use
export class ToDosModel {
    userId: number;
    id: number;
    title: string;
    completed: boolean;

  constructor(userIdInput : number, idInput : number , titleInput : string, completedInput : boolean) {
    this.userId = userIdInput;
    this.id = idInput;
    this.title = titleInput;
    this.completed = completedInput;
  }

  getToDo() {
    return this.id;
  }

}
