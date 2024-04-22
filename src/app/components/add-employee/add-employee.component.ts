import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/backend-service/http-service.service';
import { Employee } from 'src/app/interface/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  title:string="Add Employee";
  statusArr:string[] = ["Active","Inactive","Suspend"];
  addEmpData:Employee=<Employee>{};
  addressData:any[]=[];
  isHide : boolean = true;

  constructor(private service : HttpServiceService,
              private router:Router

  ) { }

  ngOnInit(): void {
    this.getAllAddress();
    console.log(this.addEmpData);
    this.isHide = false;

  }


  getAllAddress()
  {
    this.service.fetchAllAddressRecord().subscribe((response:any)=>{
      // console.log(response);
      this.addressData=response;
    })
  }

  addEmployee(jsonObj:Employee)
  {
    this.service.createEmployee(jsonObj).subscribe((response:string)=>{
      console.log(response);
      this.router.navigate(['home']);
    })
  }

  onSubmit(){
    this.addEmployee(this.addEmpData);
  }
}
