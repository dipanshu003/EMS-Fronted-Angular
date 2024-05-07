import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  onSignout(){
    let isSignOut=confirm("Are you want to sing out?");

    if(isSignOut)
      {
        this.router.navigate(['']);
      }
  }
}
