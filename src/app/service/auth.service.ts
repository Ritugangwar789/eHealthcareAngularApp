import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string='';
  email:string='';
  constructor() { }

  setUsername(username: string): void{
    this.username= username;
  }

  getUserName(): string{
    return this.username;
  }
  setEmail(email :string) :void{
    this.email=email;
  }

  getEmail():string{
    return this.email;
  }
}
