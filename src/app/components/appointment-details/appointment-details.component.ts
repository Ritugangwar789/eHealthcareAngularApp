import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appdetail } from 'src/app/model/appdetail';
import { AppdetailsserviceService } from 'src/app/service/appdetailsservice.service';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent {

  aptdt: appdetail[] = [];
  i: number = 1;
  showSpinner: Boolean = false;

  showForm: boolean = false;
  name: string = '';
  email: string = '';


  formOpen: boolean = false;
  messageSent: boolean = false;

  successMessage: string = ''; // Declare successMessage property




  constructor(private route: ActivatedRoute, private router: Router,

    private apsrv: AppdetailsserviceService,) { }

  ngOnInit() {
    //  this.aptdt = new appdetail();
    console.log("ngOnInit is called");
    setTimeout(() => { this.showData() }, 10);
  }
  openForm() {
    this.showForm = true;
  }
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

  showData() {
    this.showSpinner = true;
    this.apsrv.getdetails().subscribe(data => {
      console.log(data); this.aptdt = data;
      this.showSpinner = false;
    }, error => console.log(error));
  }

  deletep(id: number) {
    this.apsrv.deleteEmployee(id).subscribe(data => {
      console.log(data); this.showData();
    }, error => console.log(error));
    alert("Details deleted successfully")
  }

  returndash() {
    this.router.navigateByUrl('/dashboard');
  }
}


