import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TestsService } from 'src/app/service/tests.service';



@Component({

  selector: 'app-test-facilities',

  templateUrl: './test-facilities.component.html',

  styleUrls: ['./test-facilities.component.css']

})

export class TestFacilitiesComponent implements OnInit {

  showSpinner: boolean = false;

  tests: any;



  constructor(private router: Router, private service: TestsService) { }



  ngOnInit() {
    this.showSpinner = true;
    this.service.getTests().subscribe((response: any) => {
      this.tests = this.sortTests(response);
      this.showSpinner = false;
    });

  }

  returndash() {

    this.router.navigateByUrl('/dashboard');

  }

  private sortTests(tests: any[]): any[] {

    return tests.sort((a, b) => a.tname.localeCompare(b.tname));

  }



}
