import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) {}

  getAllUsers() {
    // let searchUrl = "http://localhost:5000/users";
    let searchUrl = "https://jsonplaceholder.typicode.com/users";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getUserById(id) {
    let searchUrl = "http://localhost:5000/user?userId=" + id;
    return this.http.get(searchUrl).map(res => res.json());
  }

  deleteUserById(id) {
    // let searchUrl = "http://localhost:5000/user?userId=" + id;
    let searchUrl = "https://jsonplaceholder.typicode.com/users/" + id;
    console.log(id);
    return this.http.delete(searchUrl).map(res => res.json());
  }

  addUser(userData) {
    let searchUrl = "http://localhost:5000/user";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ userData: userData }), options).map(res => res.json());
  }

  updateUser(userData) {
    let searchUrl = "http://localhost:5000/user";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(searchUrl, JSON.stringify({ userData: userData }), options).map(res => res.json());
  }
}
