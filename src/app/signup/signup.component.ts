

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
// import { EmployeeService} from '../employee.service';
// import { Employee } from '../employee';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  private _service: any;
 
  // employee =new Employee();
  constructor(private _router:Router) { }
  msg=""
  ngOnInit(): void {
    
  }
  signUpUser(){
 this._service.registerUserFromRemote(this.signUpUser).subscribe(
   (  Data: any) => {
  console.log("response received");
  this.msg="registration successfull";
  },

   (  error: { error: string; })=>{

  console.log("Exception occured");
  this.msg=error.error;
  }
 )
  }

}
