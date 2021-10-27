import { Component, OnInit } from '@angular/core';
import { ContactpService } from 'src/app/contactp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public postData:any[]=[]
  constructor(private _ps:ContactpService) { }

  ngOnInit(): void {
    this._ps.listAllContactByUser().subscribe(response=>{
      this.postData=response.postData;
    },err=>{
      console.log(err);
    })
  }

}
