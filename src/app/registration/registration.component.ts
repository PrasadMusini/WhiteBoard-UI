// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {

// }


// import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  user =new User();
google: any;
facebook: any;
linkedin: any;
  constructor(private _service:RegisterService,private _router:Router) { }
msg=""
  ngOnInit(): void {
  }
  registerUser(){
 this._service.registerUserFromRemote(this.user).subscribe(
  Data => {
  console.log("response received");
  this.msg="registration successfull";
  },
  error=>{

  console.log("Exception occured");
  this.msg=error.error;
  }
 )
  }

}
