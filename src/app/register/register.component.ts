import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public author=new User('','',''); 
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmitForm(){
     this._userService.registerUser(this.author).subscribe(response=>{
     
       this.message=response.message;
       this.isSuccess=true
       this.isError=false
     },err=>{
       this.message=err.error.message;
       this.isSuccess=false
       this.isError=true 
     }
    )
  }

}
