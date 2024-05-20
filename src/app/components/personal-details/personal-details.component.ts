import { PersonalDetailsService } from './../../service/personal-details.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalDetails } from 'src/app/model/personalDetails';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  alert: boolean = false;

  userObj: PersonalDetails = new PersonalDetails;
  userP: User = new User;
  user1: string = '';
  username: string = '';
  email: string = '';



  pd1: any = {
    id: '',
    dob: '',
    address: '',
    gender: '',
    fathername: '',
    mothername: '',
    name:'',
    username:'',
    email:''
  };

  // us: any={
  // usr:'anshul',
  // eml:'AnshulPandey@gmail.com'
  // }




  userList: PersonalDetails[] = [];
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private auth: AuthService, private personalDetailsService: PersonalDetailsService) { }
  // ngOnInit(): void {
  //   this.userObj = new PersonalDetails();
  //   this.username = this.auth.getUserName();
  //   this.email = this.auth.getEmail();
  //   console.log("ngOnInit is called");
  //   setTimeout(() => { this.getvalues() }, 10);
  // }

  // getvalues() {
  //   console.log("inside get value")

  //   // id:number=82;

  //   //this.user1 = this.route.snapshot.params[this.us.usr];

  //   this.personalDetailsService.getUser(this.username).subscribe(res => {
  //     console.log(res);
  //     this.pd1 = res;
  //   }, err => {
  //     console.log("error while updating data. ")
  //   }
  //   );

  //   console.log(this.pd1);
  //   console.log(this.pd1.id);

  //   // this.personalDetailsService.getUserbyid(82).subscribe(res => {
  //   //   console.log(res);
  //   //   this.pd1 = res;
  //   // }, err => {
  //   //   console.log("error while updating data. ")
  //   // }
  //   // );

  // }


  // updateUser() {


  //   //getvalues by username
  //   //this.getvalues();


  //   this.userObj.username = this.pd1.username;
  //   this.userObj.email = this.pd1.email;
  //   this.userObj.dob = this.pd1.dob;
  //   this.userObj.gender = this.pd1.gender;
  //   this.userObj.address = this.pd1.address;
  //   this.userObj.fathername = this.pd1.fathername;
  //   this.userObj.mothername = this.pd1.mothername;
  //   this.userObj.id = this.pd1.id;
  //   console.log(this.userObj.id);

  //   this.personalDetailsService.updateUser(this.userObj).subscribe(res => {
  //     console.log(res);
  //     // this.userObj = new PersonalDetails();
  //     //  this.alert = true;
  //     //  setTimeout(()=>this.alert=false,2000);
  //     alert('User Details updated Successfully');
  //   }, err => {
  //     console.log("error while updating data. ")
  //   });
  // }

  returndash() {
    this.router.navigateByUrl('/dashboard');
  }
updateUser(){
   this.userObj.username = this.pd1.username;
    this.userObj.email = this.pd1.email;
    this.userObj.dob = this.pd1.dob;
    this.userObj.gender = this.pd1.gender;
    this.userObj.address = this.pd1.address;
    this.userObj.fathername = this.pd1.fathername;
    this.userObj.mothername = this.pd1.mothername;
    this.userObj.id = this.pd1.id;
    this.userObj.name=this.pd1.name;
   // console.log(this.userObj.id);

      this.personalDetailsService.updateUser(this.userObj).subscribe(res => {
      console.log(res);
      // this.userObj = new PersonalDetails();
      //  this.alert = true;
      //  setTimeout(()=>this.alert=false,2000);
      alert('User Details updated Successfully');
    }, err => {
      console.log("error while updating data. ")
    });


}
ngOnInit(): void {
  this.username = this.auth.getUserName();
  this.getvalues();
}

getvalues() {
  this.personalDetailsService.getUser(this.username).subscribe(
    (res: PersonalDetails) => {
      this.pd1 = res;
      console.log('Fetched user details:', this.pd1); // Log fetched user details
    },
    (error) => {
      console.error('Error fetching user details:', error);
    }
  );

  // ngOnInit(): void {

  //   this.username = this.auth.getUserName();
  //   console.log(this.username);
  //   console.log("ngOnInit is called");
  //   setTimeout(() => { this.getvalues() }, 10);


  // }

  // getvalues(){
  //     this.personalDetailsService.getUser(this.username).subscribe(res => {
  //     console.log(res);
  //     this.pd1 = res;
  //     console.log("pd1 information")
  //     console.log(this.pd1)
  //   }, err => {
  //     console.log("error while updating data. ")
  //   }
  //   );

  }

}
