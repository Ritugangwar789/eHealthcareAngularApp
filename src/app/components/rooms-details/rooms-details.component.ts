import { Rooms } from './../../model/rooms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl  } from '@angular/forms';
import { RoomServicesService } from 'src/app/service/room-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.css']
})
export class RoomsDetailsComponent implements OnInit {
  roomDetails !: FormGroup;
  roomObj : Rooms = new Rooms();
  roomList : Rooms[] = [];

  constructor(private formBuilder : FormBuilder, private router: Router, private roomService : RoomServicesService) { }

  ngOnInit(): void {
    this.roomDetails = this.formBuilder.group({
      room : [''],
      department : [''],
      disease : ['']
    });
  }

  addRoom(){
    console.log(this.roomDetails);
    this.roomObj.rid = this.roomDetails.value.Rid;
    this.roomObj.status = this.roomDetails.value.status;
    this.roomObj.rent = this.roomDetails.value.rent;
    this.roomObj.floor = this.roomDetails.value.floor;

    this.roomService.addRoom(this.roomObj).subscribe(res=>{
      console.log(res);
      console.log("working");
    }, err=>{
      console.log(err);
    });
  }

  getAllRooms(){
    this.roomService.getAllRooms().subscribe(res=>{
      this.roomList = res;
    }, err=>{
      console.log("error while fetching data.")
    })
  }


  returndash(){
    this.router.navigateByUrl('/dashboard')
  }
}
