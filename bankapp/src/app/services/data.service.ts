import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any = {
    1000: { acno: 1000, username: "ann", password: "ann", balance: 5000 },
    1001: { acno: 1001, username: "paul", password: "paul", balance: 6000 },
    1002: { acno: 1002, username: "chinnu", password: "chinnu", balance: 7000 },
    1003: { acno: 1003, username: "rahul", password: "rahul", balance: 8000 }
  }
  constructor() { }
}
