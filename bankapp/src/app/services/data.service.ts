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
  register(acno: any, username: any, password: any) {
    let accDetails = this.users;
    if (acno in accDetails) {

      return false;
    }
    else {
      accDetails[acno] = {
        acno, username, password, balance: 0
      }
      return true;
    }
  }
  login(acno: any, pswd: any) {

    let accDetails = this.users;
    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {
        return true;

      }
      else {
        alert("invalid password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }
    //alert("login clicked")
  }

  deposit(acno: any, pswd: any, amount: any) {
    let accDetails = this.users;
    var amt = parseInt(amount)
    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {
        accDetails[acno]["balance"] += amt
        return accDetails[acno]["balance"]
      }
      else {
        alert("invalid password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }
  }
  withdraw(acno: any, pswd: any,amount:any){
    let accDetails = this.users;
    var amt=parseInt(amount)
    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {
        if (accDetails[acno]["balance"] >amt) {
          accDetails[acno]["balance"]-=amt
        return accDetails[acno]["balance"]
        } 
        else{
          alert("insufficient balance")
          return false
        }
      }
      else {
        alert("invalid password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }
  }
}
