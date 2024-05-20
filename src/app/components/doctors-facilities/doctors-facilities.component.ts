import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsService } from 'src/app/service/doctors.service';

@Component({
  selector: 'app-doctors-facilities',
  templateUrl: './doctors-facilities.component.html',
  styleUrls: ['./doctors-facilities.component.css']
})
export class DoctorsFacilitiesComponent implements OnInit {
  showSpinner: boolean = false;
  doctors: any[] = [];

  constructor(private router: Router, private service: DoctorsService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.service.getDoctors().subscribe((response: any) => {
      this.doctors = this.sortDoctors(response);
      this.showSpinner = false;
    });

  }

  returndash() {

    this.router.navigateByUrl('/dashboard');
  }
  private sortDoctors(doctors: any[]): any[] {

    return doctors.sort((a, b) => (a?.docname ?? '').localeCompare(b?.docname ?? ''));
  }

  deleteDoc(id: number) {
    this.service.getDeleteById(id).subscribe(() => {
      alert("Slot for id " + id + " removed");
      this.service.getDoctors().subscribe((response: any) => { this.doctors = this.sortDoctors(response); });
    });
  }

}
