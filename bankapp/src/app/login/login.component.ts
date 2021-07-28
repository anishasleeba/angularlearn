import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Welcome to sbt bank"
  //acnu = "please enter account number"
  acnum = "account number please"
  pswd = ""
  // users: any = {
  //   1000: { acno: 1000, username: "ann", password: "ann", balance: 5000 },
  //   1001: { acno: 1001, username: "paul", password: "paul", balance: 6000 },
  //   1002: { acno: 1002, username: "chinnu", password: "chinnu", balance: 7000 },
  //   1003: { acno: 1003, username: "rahul", password: "rahul", balance: 8000 }
  // }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  // accno(even: any) {
  //   console.log(even.target.value);
  //   this.acnum = even.target.value;
  // }
  // pwd(even: any) {
  //   console.log(even.target.value);
  //   this.pswd = even.target.value;
  // }
  login() {
    var acnum = this.acnum;
    var pswd = this.pswd;
    let users = this.ds.users;
    // pswd = 1+ pswd;
    // console.log(pswd);
    // console.log(this.pswd);


    if (acnum in users) {
      if (pswd == users[acnum]["password"]) {
        alert("login successfull")
        this.router.navigateByUrl("dashboard")
      } 
      else {
        alert("invalid password")
       }
    } 
    else {
      alert("invalid account number")
    }
    //alert("login clicked")
  }
  // login() {
  //   var acnum = this.acnum;
  //   var pswd = this.pswd;
  //   var users = this.users;
  //   // pswd = 1+ pswd;
  //   // console.log(pswd);
  //   // console.log(this.pswd);


  //   if (acnum in users) {
  //     if (pswd == users[acnum]["password"]) {
  //       alert("login successfull")
  //     } else {
  //       alert("invalid password")
  //     }
  //   } else {
  //     alert("invalid account number")
  //   }
  //   alert("login clicked")
  // }

}
