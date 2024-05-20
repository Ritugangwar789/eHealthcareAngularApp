import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personalusers, User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:8080/user';
  private baseUrll = 'http://localhost:8080/personal';

  constructor(private http: HttpClient) { }


  
  saveUsers(users: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addUsers`, users);
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/adUser`, user);
  }
  saveUser1(personaluser: personalusers): Observable<personalusers> {
    return this.http.post<personalusers>(`${this.baseUrll}/adduser`, personaluser);
  }
  
}
