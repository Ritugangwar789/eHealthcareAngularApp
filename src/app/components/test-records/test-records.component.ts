import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser'


@Component({
  selector: 'app-test-records',
  templateUrl: './test-records.component.html',
  styleUrls: ['./test-records.component.css']
})

export class TestRecordsComponent {
  constructor(private router: Router) { }
  showForm: boolean = false;
  name: string = '';
  email: string = '';


  formOpen: boolean = false;
  messageSent: boolean = false;

  successMessage: string = ''; // Declare successMessage property



  openForm() {
    this.showForm = true;
  }

  // sendEmail() {
  //   emailjs.send("service_12nrfs8","template_wwy8ua5",{
  //     to_name: this.name,
  //     send_to: this.email,
  //   }, "KEgLHaWa9u5UAc-lV").then(function(response: any) {
  //     console.log('Email sent successfully!', response);
  //     // Optionally, you can add code to display a success message or close the form
  //   }, function(error: any) {
  //     console.error('Error sending email:', error);
  //     // Optionally, you can add code to display an error message to the user
  //   });
  // }

  toggleForm() {
    this.showForm = true;
    this.formOpen = true;
  }

  sendEmail() {
    emailjs.send("service_12nrfs8", "template_wwy8ua5", {
      to_name: this.name,
      send_to: this.email,
    }, "KEgLHaWa9u5UAc-lV").then((response: any) => {
      console.log('Email sent successfully!', response);
      // Optionally, you can add code to display a success message or close the form
      this.successMessage = 'Email sent successfully. Your report has been submitted.';
      this.messageSent = true;
      this.formOpen = false;
      // Reset form fields
      this.name = '';
      this.email = '';
      setTimeout(() => {
        this.messageSent = true;
        // Reset form fields
        this.name = '';
        this.email = '';
      }, 2000); // Simulating sending email for 2 seconds
    }).catch((error: any) => {
      console.error('Error sending email:', error);
      // Optionally, you can add code to display an error message to the user
    });
  }
  
  // send(){
  //   emailjs.send("service_12nrfs8","template_wwy8ua5",{
  //     to_name: "Ritu",
  //     send_to: "rohitbaghel16890@gmail.com",
  //   });
  // }
  returndash() {

    this.router.navigateByUrl('/dashboard');
  }
}
