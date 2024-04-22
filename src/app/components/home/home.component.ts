import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/backend-service/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string="Employee List";
  data:any[] = [];

  constructor(private service : HttpServiceService) { }

  ngOnInit(): void {
    this.getAllRecord();
  }


  getAllRecord()
  {
    this.service.fetchAllRecord().subscribe((response:any)=>{
      console.log(response);
      this.data = response;
    },(error)=>{
      alert("Something Went Wrong...");
    });
  }


}
