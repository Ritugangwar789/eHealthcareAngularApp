import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FetchingemailService } from 'src/app/service/fetchingemail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userinit: string = '';
  validateButton: boolean = false;
  
  userInput: string = '';
  chatHistory: {text: string, isUser: boolean}[] = [];

  showChatForm: boolean = false;
  showChatButton: boolean = true;
 
  constructor( private route: ActivatedRoute, private router: Router, private personalemail: FetchingemailService,
    private authService: AuthService) { }

  ngOnInit() {
    this.userinit = this.authService.getUserName();

    this.personalemail.getUser(this.userinit).subscribe(res => {
      console.log(res);
      if (res.isadmin === "true") {
        console.log("comming Here");
        this.validateButton = true;
      } else {
        this.validateButton = false;
      }

    }, err => {
      console.log("error while updating data. ")
    }
    );
  }

  

  submitInput() {
    if (this.userInput.trim() !== '') {
      this.chatHistory.push({ text: this.userInput, isUser: true });
      this.personalemail.sendMessage(this.userInput).subscribe(response => {
        this.chatHistory.push({text : response, isUser: false});
      }, error => {
        console.error(error);
        this.chatHistory.push({text : 'Error: ' + error.message, isUser : false}); // Display error message
      });
      this.userInput = '';
    }
  }

  toggleChatForm() {
    this.showChatForm = !this.showChatForm;
    this.showChatButton = !this.showChatButton; // Toggle button visibility
  }
  
}
