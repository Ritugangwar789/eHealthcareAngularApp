import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppdetailsserviceService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/appointments';

  getdetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gmapt`);

  }


  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delapptbid//${id}`, { responseType: 'text' });
  }

}
