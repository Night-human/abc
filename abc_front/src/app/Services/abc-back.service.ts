import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Response } from '../entities/response';

@Injectable({
  providedIn: 'root'
})
export class AbcBackService {
  private apiUrl = '/api/users';

  constructor( private http: HttpClient) {}

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id:number) : Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getUserByName(name:String) : Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/?name=${name}`);
  }

  deleteUser(id:number) : Observable<Response> {
    return this.http.delete<Response>(`${this.apiUrl}/${id}`);
  }

  updateUser(user:User, id:number) : Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, User);
  }

  addUser(user:User) : Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

}
