import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  menu:any[]=  [
    {name:'Home', icon:'dashboard'},
    {name:'About', icon:'face'},
    {name:'Contact', icon:'face'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
