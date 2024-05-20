import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  tests: any;
  private url="http://localhost:8080/test/Tests";
  
  constructor(private httpClient: HttpClient ){}

getTests() {
  return this.httpClient.get(this.url);
  }

}
