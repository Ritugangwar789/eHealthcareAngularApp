import { Rooms } from './../model/rooms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServicesService {

  addRoomURL : string;
  getRoomURL : string;
  baseurl:string;

  constructor(private http : HttpClient) {

    this.addRoomURL = 'http://localhost:8080/rooms/addRoom';
    this.getRoomURL = 'http://localhost:8080/rooms/Rooms';
    this.baseurl='http://localhost:8080/rooms/updaterooms';
   }

   addRoom(room: Rooms): Observable<Rooms> {
     return this.http.post<Rooms>(this.addRoomURL,room);
   }

   getAllRooms(): Observable<Rooms []>{
     return this.http.get<Rooms[]>(this.getRoomURL);
   }

   getRooms():Observable<Rooms []>{
    return this.http.get<Rooms[]>('http://localhost:8080/rooms/Rooms');
   }

   updateRoom(roomupd: Object) {
    return this.http.put(`${this.baseurl}`, roomupd);
  }
}
