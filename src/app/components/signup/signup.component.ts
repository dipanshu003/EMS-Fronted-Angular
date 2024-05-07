import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/backend-service/http-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm') signupForm!: NgForm;


  constructor(private service : HttpServiceService,
              private router : Router
  ) { }

  ngOnInit(): void {
  }

  signupAdmin(jsonObj:any)
  {
    this.service.registerAdmin(jsonObj).subscribe((respone:any)=>{
      // console.log(respone);
      alert(respone);
      this.router.navigate(['']);
    },
    (error)=>{
      alert("Something Went Wrong...");
      this.signupForm.resetForm();
    }
  )
  }

  signupSubmit(item:any){
    console.log("called...");
    console.log(item)

    let adminJson={
      "fullname":item.fullname,
      "username":item.username,
      "email":item.email,
      "password":item.password,
      "gender":item.gender
    }
    
    this.signupAdmin(adminJson);
  }

}
