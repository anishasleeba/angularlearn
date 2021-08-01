import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acnum = ""
  pswd = ""
  amount = ""
  acnum1 = ""
  pswd1 = ""
  amount1 = ""

  depositForm = this.fb.group({
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    acnum: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  withdrawForm = this.fb.group({
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    acnum1: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  user=this.ds.currentUser
  
  constructor(private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acnum
      var pswd = this.depositForm.value.pswd
      var amount = this.depositForm.value.amount
      var result = this.ds.deposit(acno, pswd, amount)
      if (result) {
        alert("deposit successfull of amount: " + amount + "nw balance is" + result)
      }

    }
    else {
      alert("invalid form")
    }


  }
  withdraw() {
    if (this.withdrawForm.valid) {
      var acno = this.withdrawForm.value.acnum1
      var pswd = this.withdrawForm.value.pswd1
      var amount = this.withdrawForm.value.amount1
      var result = this.ds.withdraw(acno, pswd, amount)
      if (result) {
        alert("withdrawel successfull of amount: " + amount + "nw balance is" + result)
      }
    }
    else {
      alert("invalid form")
    }
    // alert("deposit")
  }

}
