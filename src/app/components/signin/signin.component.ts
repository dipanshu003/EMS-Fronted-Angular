import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpServiceService } from 'src/app/backend-service/http-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('signinForm') signinForm!: NgForm; // Reference to the form


  constructor(private service : HttpServiceService,
              private router : Router
   ) { }

  ngOnInit(): void {
  }


  signinAdmin(jsonObj : any)
  {
    this.service.loginAdmin(jsonObj).subscribe((response:any)=>{
      if(response==="Sign in successful..."){
        this.router.navigate(['/home']);
      }
      else{
        alert(response);
        this.signinForm.resetForm();
        this.router.navigate(['']);
      }
    },
    (error)=>{
      alert("Something went wrong...")
    }
  )
  }

  signSubmit(item:any)
  {

    let admonJsonObj = {
      "password":item.password,
      "username":item.username
    }

    this.signinAdmin(admonJsonObj);
  }

}
