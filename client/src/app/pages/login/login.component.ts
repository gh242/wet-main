import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  accountInput = '';
  pwInput = '';



  constructor(private router:Router){}

  ngOnInit(): void {
    console.log('login component!!');
    
  }

  login(){

    console.log("account="+ this.accountInput + " pw= "+ this.pwInput);
    
    this.router.navigateByUrl('/pages');
  }

}
