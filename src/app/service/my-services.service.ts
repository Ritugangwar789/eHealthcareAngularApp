import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  private baseURL = 'https://localhost:8080/eHealth';

  constructor(private http: HttpClient) { }


}
