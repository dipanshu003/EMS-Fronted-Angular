import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/backend-service/http-service.service';
import { Employee } from 'src/app/interface/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id!:number;
  updateEmpData:Employee=<Employee>{};
  title:string="Update Employee";
  updateAddress:any[] = [];

  updateStatus : string[] = ['Active','Inactive','Suspend'];

  constructor(private route:ActivatedRoute,
              private service:HttpServiceService,
              private router : Router
  ) { }

  ngOnInit(): void {
    this.getDataFromURL();
    this.getAllAddress();
  }

  getDataFromURL()
  {
    this.route.paramMap.subscribe((param:any)=>{
      this.getEmployeeById(param.get("id"));
    })
  }

  getAllAddress()
  {
    this.service.fetchAllAddressRecord().subscribe((response:any)=>{
      // console.log(response);
      this.updateAddress=response;
    })
  }

  getEmployeeById(id:number)
  {
    this.service.fetchRecordById(id).subscribe((response:any)=>{
      console.log(response);
      this.updateEmpData=response;
    })
  }

  updateEmployeeData(jsonObj:any)
  {
    this.service.modifyEmployee(jsonObj).subscribe((response:string)=>{
      // console.log(response);
      this.router.navigate(['home']);
      
    })
  }

  onSubmit(){
    console.log(this.updateEmpData);
    this.updateEmployeeData(this.updateEmpData);
  }

}
