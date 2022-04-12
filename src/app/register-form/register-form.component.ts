import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  // data= new Object();
  constructor(private formbuilder: FormBuilder, private dataservice:DataService) {
    this.registerForm = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      userName: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log("register data"+this.registerForm.value);
    this.dataservice.getFunction(this.registerForm.value).subscribe(response=>{
      console.log("register response"+response);
    })

  }

}

export class Register {
  constructor(public firstName: string,
    public lastName: string,
    public age: string,
    public userName: string,
    public password: string) {

  }
}


