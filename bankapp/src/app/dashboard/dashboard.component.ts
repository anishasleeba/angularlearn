import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acnum=""
  pswd=""
  amount=""
  acnum1=""
  pswd1=""
  amount1=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.acnum
    var pswd=this.pswd
    var amount=this.amount
    var result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert("deposit successfull of amount: " + amount +"nw balance is"+result ) 
    }
    
  }
  withdraw(){
    var acno=this.acnum1
    var pswd=this.pswd1
    var amount=this.amount1
    var result=this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert("withdrawel successfull of amount: " + amount +"nw balance is"+result ) 
    }
    
    // alert("deposit")
  }

}
