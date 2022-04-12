import { Component, OnInit } from '@angular/core';
import { DeskService } from '../desk.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  users : any[] = [
    {id:'option1', name:'akshay'},
    {id:'option2', name:'yadav'},
    {id:'option3', name:'bro'}
  ]
  
  hide1 = false;
  hide2 = false;
  i:boolean =false;

  constructor(private desk:DeskService) {
    this.desk.subject.subscribe((k:any)=>{
      this.hide1 = k
      this.hide2 = this.i
    });
    this.desk.subject2.subscribe((d:any)=>{
      this.hide2 = d
      this.hide1 = this.i
    })
  }

  ngOnInit(): void {
  }

}
