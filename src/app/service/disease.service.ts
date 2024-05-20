import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  diseases: any;
  private url="http://localhost:8080/inpatient/patients";
  
  constructor(private httpClient: HttpClient ){}

getDiseases() {
  return this.httpClient.get(this.url);
  }
}