// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {

//   constructor() { }
// }



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient) { }
  public loginUserFromRemote(user :User):Observable<any>{ 

    return this._http.post("http://localhost:8080/user/employee", user);
  }
  public registerUserFromRemote(user :User):Observable<any>{ 

    return this._http.post("http://localhost:8080/user/registeruser", user);
  }

}