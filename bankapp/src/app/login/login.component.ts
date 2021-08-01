import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  loginForm = this.fb.group({
    acnum: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

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
    if (this.loginForm.valid) {
      var acnum = this.loginForm.value.acnum;
    var pswd = this.loginForm.value.pswd;
    var result = this.ds.login(acnum, pswd);

    if (result) {
      alert("login successfull")
      this.router.navigateByUrl("dashboard")
    }
    }
    else{
      alert("invalid form")
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


