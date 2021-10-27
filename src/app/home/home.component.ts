import { Component, OnInit } from '@angular/core';
import {ContactpService} from '../contactp.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {

  constructor(private _contactpService:ContactpService) { }

  public postData:any[]=[]

  ngOnInit(): void {
    this._contactpService.listAllContacts().subscribe(response=>{
      if(response.postData.length!=0){
        
        this.postData = response.postData
      }
      
    },err=>console.log(err))
  }

}
