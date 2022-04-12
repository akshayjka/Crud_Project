import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DeskService } from '../desk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {


  menu: any[] = [
    { name: "Dashboard", url: "/admin-dashboard", icon: "dashboard", children: [] },
    {
      name: "User Management", url: "/user-management", icon: "account_balance", children: [
        { name: "User", url: "/user", icon: "face" },
        { name: "Roles", url: "/role", icon: "important_devices" }
      ]
    },
    
   // { name: "Document Management", url: "/admin-dashboard", icon: "dashboard", children: [
   // { name: "Document Checklist", url: "/document-check", icon: "dashboard"}
   // ] },

    { name: "Customer Management", url: "/admin-dashboard", icon: "dashboard", children: [
    { name: "Deactivate customer", url: "/deactivate-account", icon: "clear"},
    { name: "Search customer", url: "/search-customer", icon: "dashboard"}
    ] },

    { name: "Configuration", url: "/admin-dashboard", icon: "dashboard", children:[
    { name: "Security Parameter", url: "/security-parameter", icon: "dashboard"}
      
    ]},

    { name: "WeConnect - TIPS", url: "/dashboard", icon: "account_balance", children: [
      { name: "Account lookup", url: "/account-lookup", icon: "account_circle" },
      { name: "Transfer Funds", url: "/transfer-fund", icon: "money" },
      { name: "Settlement", url: "/settlement", icon: "lock" },
      { name: "Message", url: "/messaging", icon: "message" },
      { name: "Transfer Reversal", url: "/transfer-reversal", icon: "lens" },
      
    ] },
    { name: "Report", url: "/new-account-management", icon: "notifications", children: [
      {name: "Account Details", url: "/account-details", icon: "people"}
    ] }
  ];



  toggle:boolean = false
  toggle2:boolean = false
  menu1:boolean = true
  menu2:boolean = true
  hide:boolean = false
  icon1:boolean = true
  icon2:boolean = false
  

  constructor(private desk:DeskService, private route:Router) { }

  ngOnInit(): void {
  }
  data1(menu1: any){
    this.desk.subject.next(menu1);
    
    this.toggle = true
    this.toggle2 = false
    this.hide = true;
    this.icon1 = false;
    this.icon2 = true;
  }
  data2(menu2: any){
    this.desk.subject2.next(menu2);

    this.toggle2 = true
    this.toggle = false
    this.hide = false
    this.icon2 = false
    this.icon1 = true
  }

  activemainmenu : string = " ";
  subname: string = " ";
  selectedmenu: string = "";
  activatemenu(menu:any){
    console.log("activemainmenu: ", this.activemainmenu);
    if(this.activemainmenu == " "){
      console.log("First time menu selected");
      this.activemainmenu = menu.name;
      this.subname = menu.name;
      this.selectedmenu = menu.name;
      console.log("activemainmenu : ", this.activemainmenu);
    }
    else if(this.activemainmenu == menu.name){
      console.log("same menu clicked");
      this.activemainmenu = " ";
      this.subname = " ";
      this.selectedmenu = "";
    }
    else{
      this.activemainmenu = menu.name;
      this.subname = menu.name;
      this.selectedmenu = menu.name;
    }
  }

  activesubmenu:string = "";
  activatesubmenu(submenu : any){
    this.activesubmenu = submenu.name;
  }
 

}
