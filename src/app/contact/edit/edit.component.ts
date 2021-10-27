import { Component, OnInit } from '@angular/core';

import { ContactpService } from 'src/app/contactp.service';
import { ActivatedRoute } from '@angular/router';
import { Contacts } from 'src/app/contacts';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public userID!:string;
  public contact=new Contacts('','','','','','');
  public message!:string;
  public isSuccess:boolean=false
  public isError:boolean=false

  constructor(private _ct:ContactpService,private _acroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      this.userID=param.id  
    })
    this._ct.getPostByID(this.userID).subscribe(res=>{
      console.log(res);
      this.userID=res.post._id
      this.contact.cname=res.post.postContName
      this.contact.cemail=res.post.postContEmail
      this.contact.cph=res.post.postContPhone
      this.contact.cty=res.post.postContType
      this.contact.pauthor=res.post.userId 
      this.contact.pdate=res.post.postDate   
    },err=>{
      console.log(err)
    })
  }

  onSubmitContact(){
    console.log(this.contact)

    this._ct.updatePost(this.userID,this.contact).subscribe(res=>{
      this.message=res.message
      this.isError=false
      this.isSuccess=true
    },err=>{
      this.message=err.error.message
      
      this.isError=true
      this.isSuccess=false
    })
  }

}
