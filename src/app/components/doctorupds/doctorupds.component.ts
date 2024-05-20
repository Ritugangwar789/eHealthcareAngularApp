import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { doctors } from 'src/app/model/doctors';
import { DoctorsService } from 'src/app/service/doctors.service';

@Component({
  selector: 'app-doctorupds',
  templateUrl: './doctorupds.component.html',
  styleUrls: ['./doctorupds.component.css']
})
export class DoctorupdsComponent {




  //   docname:string='';
  //   docexp:number=0;
  //   availfrom:string='';
  //   availto:string='';
  //   docdep:string='';
  //   // docid:number=0;
  //   docdes:string='';
  //   slot1:string='';
  //   slot2:string='';
  //   slot3:string='';
  //   slot4:string='';
  //   slot5:string='';




  // constructor(private router: Router, private http: HttpClient ){}

  // save()
  // {

  //   let bodyData = {
  //     "desg": this.docdes,
  //     // "docid":this.docid,
  //   "docname": this.docname,
  //   "exp": this.docexp,
  //   "post": this.docdes,
  //   "time": this.availto,
  //   // "slot1":this.slot1
  //   // "slot2":this.slot2
  //   // "slot3":this.slot3
  //   // "slot4":this.slot4
  //   // "slot5":this.slot5

  //   };
  //   console.log(bodyData);

  //   this.http.post("http://localhost:8080/doctor/addDoctor",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Doctors details have been updated");
  //       this.resetValues();
  //   });
  // }
  // resetValues() {
  //    this.docdes='',
  //   // this.docid,
  // this.docname='',
  //  this.docexp=0,
  //  this.docdes='',
  //  this.availto='',
  //  this.availfrom='';
  //  this.slot1='';
  //  this.slot2='';
  //  this.slot3='';
  //  this.slot4='';
  //  this.slot5='';


  // }

  returndash() {
    this.router.navigateByUrl('/dashboard')
  }



  // id: number=0;
  doctorsupd: doctors = new doctors;


  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder,
    private docserv: DoctorsService) { }


  updDoc() {
    // this.doctorsupd.id = 5;
    console.log(this.doctorsupd.docname);
    // console.log(this.doctorsupd.time);
    this.docserv.updateDoctor(this.doctorsupd).subscribe(data => {
      console.log(data);
      this.doctorsupd = new doctors();
      alert("Doctor Details Added");
      // this.router.navigateByUrl('/inpatient-form');


    },
      error => console.log(error));
  }




}
