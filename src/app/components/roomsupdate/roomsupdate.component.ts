import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { doctors } from 'src/app/model/doctors';
import { Rooms } from 'src/app/model/rooms';
import { DoctorsService } from 'src/app/service/doctors.service';
import { RoomServicesService } from 'src/app/service/room-services.service';

@Component({
  selector: 'app-roomsupdate',
  templateUrl: './roomsupdate.component.html',
  styleUrls: ['./roomsupdate.component.css']
})
export class RoomsupdateComponent {

  // floorno: string ="";
  // roomno: string ="";
  // avail: string ="";
  // constructor(private router: Router, private http: HttpClient )
  // {}
  // save()
  // {

  //   let bodyData = {
  //     "floor" : this.floorno,
  //     "rid" : this.roomno,
  //     "status" : this.avail
  //   };
  //   console.log(bodyData);

  //   this.http.post("http://localhost:8080/rooms/addRoom",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Room details Updates");
  //       this.router.navigateByUrl('/roomsupdate');
  //       this.resetValues();


  //   });
  // }
  // resetValues() {
  //   this.floorno="",
  //    this.roomno="",
  //     this.avail=""
  // }



  roomsupd: Rooms = new Rooms;


  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder,
    private roomserv: RoomServicesService) { }


  updRoom() {
    // this.doctorsupd.id = 5;
    console.log(this.roomsupd.status);
    // console.log(this.doctorsupd.time);
    this.roomserv.addRoom(this.roomsupd).subscribe(data => {
      console.log(data);
      this.roomsupd = new Rooms();
      alert("Room details Updated");
      // this.router.navigateByUrl('/inpatient-form');


    },
      error => console.log(error));
  }
  returndash() {
    this.router.navigateByUrl('/dashboard')
  }




  resetValues() { }

}
