import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly APIUrl = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  getUsers() : Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(this.APIUrl + "/users");
  }
}

//class to help out with formating of data - easier use
export class UserModel {
  id: number;
  name: string;
  username: string;

  constructor(idInput : number, nameInput : string, usernameInput : string) {
    this.id = idInput;
    this.name = nameInput;
    this.username = usernameInput;
  }

  getId() {
    return this.id;
  }
}

