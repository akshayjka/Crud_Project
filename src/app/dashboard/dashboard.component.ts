import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  num:number = 0;

   Cars = [
    {id:1, name:'BMW'},
    {id:2, name:'Skoda'},
    {id:3, name:'Mercedes'}
  ];
  
  addForm:FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    
  
   this.addForm = this.formbuilder.group({
     'email':[''],
     password:[''],
     users : new FormArray([
     this.formbuilder.group({
       itemname:[''],
      itemno:['']
     })
    ])
   })
  }
  get frmArr(){
    return this.addForm.get('users') as FormArray;
  }
  
  

  ngOnInit(): void {
    
  }
  goto(){
    console.log(this.addForm.value);
  }  
  addnew(){
    const newproduct = this.formbuilder.group({
      itemname:['']
    });
    this.frmArr.push(newproduct);
    this.num = this.num+1;
  }
  remove(i:any){
    this.frmArr.removeAt(i);
  }
 /* removeitem(){
    this.frmArr.removeAt(this.num);
    this.num = this.num-1;
  }*/

}
