import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-rec',
  templateUrl: './transaction-rec.component.html',
  styleUrls: ['./transaction-rec.component.css']
})
export class TransactionRecComponent {
  constructor(private router: Router) { }
  returndash() {

    this.router.navigateByUrl('/dashboard');
  }
}
