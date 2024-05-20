import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InpatservService {

 
  private baseUrl = 'http://localhost:8080/inpatient';
  private appointmenturl = 'http://localhost:8080/appointments/pmapt';
  

  constructor(private http: HttpClient) { }

  getPatient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/patientById/${id}`);
  }
  savePatient(inpatient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addpatient`, inpatient);
  }

  savepatientapp(appointmentobj: Object): Observable<Object> {
    return this.http.post(`${this.appointmenturl}`, appointmentobj);
  }
}
