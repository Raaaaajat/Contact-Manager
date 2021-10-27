import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/contacts';
import { ActivatedRoute } from '@angular/router';

import { ContactpService } from 'src/app/contactp.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public userID!:string;
  public contact=new Contacts('','','','','','');
  public message!:string;
  public isSuccess:boolean=false
  public isError:boolean=false
  public postData:any[]=[]
  constructor(private _ct:ContactpService,private _rt:ActivatedRoute) {

   }


  ngOnInit(): void {
    
    
    // this._ct.getPostByID(this.userID).subscribe(res=>{
    //   this.postData=res.post;
    //    console.log(res);
    //    //this.userID=res.post._id
    //    this.contact.cname=''
    //    this.contact.cemail='' 
    //    this.contact.cph=''
    //    this.contact.cty=''
    //    this.contact.pauthor=localStorage.getItem('userID')!
    //    this.contact.pdate=''
    
    // },err=>{
    //   console.log(err);
    // })
  }

  onAdd()
  {
    this.contact.pauthor=localStorage.getItem('userID')! 
    this._ct.createPost(this.contact).subscribe(res=>{
      this.message=res.message
      this.isError=false
      this.isSuccess=true
    },err=>{
      console.log(err)
      this.message=err.error.message
      this.isError=true
      this.isSuccess=false
      
    }) 
  }

}
