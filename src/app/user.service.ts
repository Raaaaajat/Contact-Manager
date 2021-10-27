import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'
//import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  registerUser(author:any){
    return this._http.post<{message:string,author:any}>(environment.baseUrlUser+'/register',author); 
  }
  
  loginUser(loginInfo:any){
    return this._http.post<{message:string,user1:any,token:string}>(environment.baseUrlUser+'/login',loginInfo)
  }
// isLoggedIn(){
//   if(localStorage.getItem('token')==null){
//     return false
//   }
//   else{
//     return !this.jwt.isTokenExpired(localStorage.getItem('token')!)   
//   }
// }
}
