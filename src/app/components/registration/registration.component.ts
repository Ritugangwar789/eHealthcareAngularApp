import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { personalusers, User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { PersonalDetailsService } from 'src/app/service/personal-details.service';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  user1: User = new User()
  personaluser : personalusers=new personalusers();
  user: any = {
    Name: '',
    Username: '',
    Email: '',
    Password: '',
    createpass: ''
  };
   

  constructor(private userService: ServiceService,private apsra : PersonalDetailsService, private auth:AuthService,private router: Router) { }
  //

  ngOnInit() { }

  joinValidation(): boolean {
    if((this.user.Email).length===0 || this.user.createPass===0 || this.user.Username===0){
            alert('Please enter all the credentials');
      return false;
    }
    if (!this.isValidEmail(this.user.Email)) {
      alert('Please enter a valid email address.');
      return false ;
    }
    if (this.user.createpass.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }
    if(!(this.user.Password==this.user.createpass)){
      alert('Password Incorrect.');
      return false;
    }
    // If both email and password are valid, the form will submit
    else{
      this.onSubmit();
      alert('Congratulations! Your Account has been made!');

      this.router.navigate(['/dashboard']);
    return true;

    }
  }
  isValidEmail(email: string): boolean {

    const emailRegex: RegExp = /^[^\s@]+@['carelon']+\.[^\s@]+$/;

    return emailRegex.test(email);

  }
  onSubmit() {
    this.user1.name = this.user.Name;
    this.user1.username = this.user.Username;
    this.user1.email = this.user.Email;
    this.user1.password = this.user.Password;
    this.user1.isadmin = "false";

    this.auth.setUsername( this.user1.username);
    this.auth.setEmail( this.user1.email);

    console.log(this.user1);
    this.userService.saveUser(this.user1).subscribe(user1 => {
      console.log(user1);
      console.log("inserted in user");
    },)

    this.personaluser.username=this.user.Username;
    this.personaluser.email=this.user.Email;
    this.personaluser.name=this.user.Name;
   // this.personaluser.id=0;
    this.personaluser.dob='';
    this.personaluser.gender='';
    this.personaluser.address='';
    this.personaluser.fathername='';
    this.personaluser.mothername='';

    console.log(this.personaluser);

    this.apsra.saveuser(this.personaluser).subscribe(data => {
      console.log(data);
      console.log("inserted in personal");
    },)
  //   this.apsra.saveUser1(this.user1).subscribe(user1 => {
  //     console.log(user1);
  // },)

}

}
