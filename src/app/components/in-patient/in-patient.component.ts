import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { inpat } from 'src/app/model/inpatmod';
import { Rooms } from 'src/app/model/rooms';
import { AuthService } from 'src/app/service/auth.service';
import { FetchingemailService } from 'src/app/service/fetchingemail.service';
import { InpatservService } from 'src/app/service/inpatserv.service';
import { PersonalDetailsService } from 'src/app/service/personal-details.service';
import { RoomServicesService } from 'src/app/service/room-services.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-in-patient',
  templateUrl: './in-patient.component.html',
  styleUrls: ['./in-patient.component.css']
})
export class InPatientComponent implements OnInit {
  inpatientForm: FormGroup = new FormGroup({});

  id: number = 0;
  inpatient: inpat = new inpat();
  Roomslist: any[] = [];
  roomsinfloor: Rooms[] = [];

  selectedFloor: number = 0;
  selecteddoc: string='';

  appin:any={
    address: '',
    aid:0 ,
    date: '',
    disease: '',
    docname: '',
    gender: '',
    mail: '',
    pid: 0,
    pname: '',
    pphone: '',
    ptype: '',
    room: '',
    username:''
  };


  pd1: any = {
    id: '',
    dob: '',
    email: '',
    address: '',
    gender: '',
    fathername: '',
    mothername: ''
  };




  checke: string = 'Available';
  roomupd: Rooms = new Rooms;
  agreeToTerms: boolean = false;
  righ: boolean = false;
  phone: string = '';
  name: String = '';
  date: string = '';
  saverid: number = 0;
  userinit: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private personalemail: FetchingemailService,
    private inpatserv: InpatservService, private roomserv: RoomServicesService, private authService: AuthService) { }
  //////////////////////////////////////////////////////////////////////
  ngOnInit() {
    //, private headuse:HeaderComponent


    this.userinit = this.authService.getUserName();
    // this.inpatient.username=this.userinit;
    // console.log(this.userinit);



    this.personalemail.getUser(this.userinit).subscribe(res => {
      // console.log("njsdnklsandls");

      console.log(res);
      this.pd1 = res;
    }, err => {
      console.log("error while updating data. ")
    }
    );
    // this.username=this.headuse.username;
    //  this.username="dasdfbas";
    // this.inpatientForm = this.fb.group({
    //   ipname: ['', Validators.required],
    //   ipphone: [
    //     '',
    //     [Validators.required, Validators.pattern("^[0-9]{10}$")],
    //   ],
    //   ipgender:  ['', Validators.required],
    //   ipaddress: ['', Validators.required],
    //   ippincode: ['', Validators.required],
    //   ipdoa: ['', Validators.required],
    //   ipmarital: ['', Validators.required],
    //   selectedFloor: ['', Validators.required],
    //   iproom: [null, Validators.required],
    //   ipmedicine: ['', Validators.required],
    //   agreeToTerms: [false, Validators.requiredTrue]


    // });



  }







  getRoomsbyfloor() {
    this.roomserv.getRooms().subscribe(roomsinfloor => {

      this.roomsinfloor = roomsinfloor.filter(room => room.floor == this.selectedFloor).filter(room => room.status == 'Available');



    });
  }

  unav() {
    this.roomserv.getRooms().subscribe(roomsinfloor => {
      this.roomsinfloor = roomsinfloor.filter(room => room.floor == this.selectedFloor)
    });
    this.saverid = this.roomsinfloor[0].rid;
    console.log(this.saverid);
    // console.log(this.username);

    this.roomupd.floor = this.roomsinfloor[0].floor;
    this.roomupd.rid = this.roomsinfloor[0].rid;
    this.roomupd.status = 'Unavailable';

    this.roomserv.addRoom(this.roomupd).subscribe(roomupd => {
      console.log(roomupd);
    },
      error => { console.log(error); }
    );
    this.getRoomsbyfloor();
  }

  addappointment() {
    //   this.userinit = this.authService.getUserName();
    //   console.log(this.userinit);
    this.inpatient.floor = this.selectedFloor;
    this.inpatient.username = this.userinit;
    this.inpatient.ipmail = this.pd1.email;
    this.inpatient.ptype = "inpatient";
    this.inpatserv.savePatient(this.inpatient).subscribe(data => {
      console.log(data);
      this.inpatient = new inpat();

      // this.router.navigateByUrl('/inpatient-form');
      // alert("Appointment Booked!!");
      this.unav();
      this.ngOnInit();






    },
      error => console.log(error));
      
     
        this.appin.address='';
        this.appin.aid=this.pd1.id ;
        this.appin.date=this.inpatient.ipdoa;
        this.appin.disease='';
        // this.appin.docname=this.selecteddoc;
        this.appin.gender='';
        this.appin.mail=this.pd1.email;
        this.appin.pid=this.pd1.id;
        this.appin.pname=this.inpatient.ipname;
        this.appin.pphone='';
        this.appin.ptype='In-patient';
        this.appin.room='';
        this.appin.username=this.pd1.username;
        this.appin.docname='Dr. Manohar';

      

      this.inpatserv.savepatientapp(this.appin).subscribe(data => {
        console.log(data);
        this.inpatient = new inpat();
  
        // this.router.navigateByUrl('/inpatient-form');
        alert("Appointment Booked!!");
        this.unav();
        this.ngOnInit();
  
  
  
  
  
  
      },
        error => console.log(error));
  }




  returndash() {
    this.router.navigateByUrl('/dashboard')
  }

  checkbox() {
    console.log(this.agreeToTerms);
    return this.agreeToTerms = false;
  }

  foValidation(): boolean {
    console.log(this.agreeToTerms);

    // if (!this.validname(this.inpatient.ipname)) {
    //   alert('Please enter your name ');
    //   this.checkbox();
    //   console.log(this.agreeToTerms);

    //   return false;
    // }

    if (!this.validphone(this.inpatient.ipphone)) {
      alert('Please enter 10 digit phone number');
      this.agreeToTerms = false;
      return false;
    }

    if (!this.validname(this.inpatient.ipaddress)) {
      alert('Please provide address');
      return false;
    }
    if (!this.validpincode(this.inpatient.ippincode)) {
      alert('Please provide a 6 digit pincode');
      return false;
    }
    if (this.inpatient.ipgender == '') {
      alert('Please state your gender');
      return false;
    }
    if (this.inpatient.ipmarital == '') {
      alert('Please fill  martial status');
      return false;
    }


    if (this.selectedFloor == 0) {
      alert('Please select floor');
      return false;
    }
    if (this.inpatient.iproom == 0) {
      alert('Please select room');
      return false;
    }
    if (this.inpatient.ipmedicine == '') {
      alert('Please fill  your medication details');
      return false;
    }





    // Validate password
    // if (this.password.length < 8) {
    //   alert('Password must be at least 8 characters long.');
    //   return false;
    // }



    // If both email and password are valid, the form will submit
    //   alert('Logged IN.');
    this.righ = true;
    return true;
  }


  validname(name: string): boolean {
    const phoRegex: RegExp = /^[A-Za-z\s'-]+$/;
    return phoRegex.test(name);
  }
  validdate(date: string): boolean {
    const dateRegex = /^(?:20\d{2}|19\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    return dateRegex.test(date);
  }
  validpincode(pin: string): boolean {
    const phoRegex: RegExp = /^[0-9]{6}$/;
    return phoRegex.test(pin);
  }

  validphone(phone: string): boolean {
    const phoRegex: RegExp = /^[0-9]{9}$/;
    return phoRegex.test(phone);
  }
  validdrop(phone: string): boolean {
    const phoRegex: RegExp = /^0?[1-9][0-9]{9}$/;
    return phoRegex.test(phone);
  }

}

