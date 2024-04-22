import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/backend-service/http-service.service';
import { Employee } from 'src/app/interface/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  empData:Employee=<Employee>{};
  id!:number ;

  constructor(private route:ActivatedRoute,
              private service:HttpServiceService,
              private router:Router
  ) { }

  ngOnInit(): void {
    this.getDataFromURL();
  }

  getDataFromURL()
  {
    this.route.paramMap.subscribe((param:any)=>{
      // console.log(param.get("id"));
      this.id = param.get("id");
      this.getRecordById(this.id);
    })
  }

  getRecordById(id:any)
  {
    this.service.fetchRecordById(id).subscribe((response:any)=>{
      // console.log(response);
      this.empData=response;
      console.log(this.empData);
    })
  }

  deleteEmployeeById(id:number)
  {
    this.service.removeEmpById(id).subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['home']);
    })
  }

  onDelete(){
    this.deleteEmployeeById(this.id);
  }

}
