import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //aim = "Welcome to sbt bank"
  //acnu = "please enter account number"
  acnum = ""
  pswd = ""
  uname =""
  // users: any = {
  //   1000: { acno: 1000, username: "ann", password: "ann", balance: 5000 },
  //   1001: { acno: 1001, username: "paul", password: "paul", balance: 6000 },
  //   1002: { acno: 1002, username: "chinnu", password: "chinnu", balance: 7000 },
  //   1003: { acno: 1003, username: "rahul", password: "rahul", balance: 8000 }
  // }
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var acnum = this.acnum;
    var pswd = this.pswd;
    var uname =this.uname;
    var result=this.ds.register(acnum,uname,pswd)
    if(result){
      alert("registration succesfull")
      this.router.navigateByUrl("")
    }
    else{
      alert("user already exist")
      this.router.navigateByUrl("")
    }
    // alert("register clicked")
  }

}
