import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingemailService {

  constructor(private http : HttpClient) {}

   private baseUrl = 'http://localhost:8080/user';
   private baseUrl2 = 'http://localhost:8080/api/chat/message';

   getUser(userinit: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/username1/${userinit}`)
    }
    sendMessage(message: string): Observable<string> {
      return this.http.post(this.baseUrl2, message, { responseType: 'text' });
    }

 
}
