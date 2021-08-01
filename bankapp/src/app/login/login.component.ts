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
  acnum = "account number please"
  pswd = ""

  constructor(private router: Router, private ds: DataService) { }

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
    var result = this.ds.login(acnum, pswd);

    if (result) {
      alert("login successfull")
      this.router.navigateByUrl("dashboard")
    }
  }
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


