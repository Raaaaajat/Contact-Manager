import { Component, OnInit } from '@angular/core';
import { ContactpService } from 'src/app/contactp.service';
import { ActivatedRoute } from '@angular/router';
import { Contacts } from 'src/app/contacts';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
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

  onDeleteContact(){
    console.log(this.contact)

    this._ct.deletePost(this.userID,this.contact).subscribe(response=>{
      this.message=response.message
      this.isError=false
      this.isSuccess=true
    })
  }

}
