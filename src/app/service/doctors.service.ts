import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctors: any;
  private url = "http://localhost:8080";
  private appointmenturl = 'http://localhost:8080/appointments/pmapt';

  constructor(private http: HttpClient) { }

  getDoctors() {
    return this.http.get(`${this.url}/doctors/Doctors`);
  }

  getDoctorsByDate(date:string){
    return this.http.get(`${this.url}/doctors/Doctors`);
  }
  
  getTimeSlotsByDoctor(doctorId: string){
    return this.http.get(`${this.url}/doctors/DoctorById/${doctorId}`);
    // return this.http.get(`${this.url}/doctors/DoctorById/42`);
  }

  updateDoctor(inpatient: Object): Observable<Object> {
    return this.http.post(`${this.url}/doctors/addDoctor`, inpatient);
  }

  bookOutpatientAppointment(appointmentData: any): Observable<any>{
    return this.http.post(`${this.url}/outpatients/create`, appointmentData);
  }

  savepatientapp(appointmentobj: Object): Observable<Object> {
    return this.http.post(`${this.appointmenturl}`, appointmentobj);
  }

  removeTimeSlot(doctors: any):Observable<any>{
    return this.http.put(`${this.url}/doctors/update/${doctors.id}`, doctors);
  }

  getDeleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/doctors/delete/${id}`);
  }
}

