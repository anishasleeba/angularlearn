import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // acnum = ""
  // pswd = ""
  // uname =""
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acnum: ['', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    // if (this.registerForm.get('acnum')?.errors) {
    //   alert("invalid")
    // }
    if (this.registerForm.valid) {
      var acnum = this.registerForm.value.acnum;
      var pswd = this.registerForm.value.pswd;
      var uname = this.registerForm.value.uname;
      var result = this.ds.register(acnum, uname, pswd)
      if (result) {
        alert("registration succesfull")
        this.router.navigateByUrl("")
      }
      else {
        alert("user already exist")
        this.router.navigateByUrl("")
      }
    }
    else {
      alert("form invalid")
    }

    // alert("register clicked")
  }

}
