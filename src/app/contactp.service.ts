import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ContactpService {
  //private _url="http://localhost:3000/api/post"
  constructor(private _http:HttpClient) { }

  listAllContacts(){
       return this._http.get<{message:string;postData:any}>(environment.baseUrlPost);   
  }

  listAllContactByUser(){
    return this._http.get<{message:string;postData:any}>(environment.baseUrlPost+"/"+localStorage.getItem('userID'),{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!) 
    });
  
  }

  getPostByID(id:string){
    return this._http.get<{message:string,post:any}>(environment.baseUrlPost+'/getbyid/'+id,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!) 
    })
  }

  updatePost(id:string,post:any){
    return this._http.put<{message:string}>(environment.baseUrlPost+'/update/'+id,post,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    })
  }

  deletePost(id:string,post:any){
    return this._http.delete<{message:string}>(environment.baseUrlPost+'/delete/'+id,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!) 
    })
  }
  createPost(contact:any){
    return this._http.post<{message:string}>(environment.baseUrlPost+'/save',contact,{
      headers:new HttpHeaders().set('x-auth-token',localStorage.getItem('token')!)
    })
  }
}
