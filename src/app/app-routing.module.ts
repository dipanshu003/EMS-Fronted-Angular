import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path:"",
    component:SigninComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"details/:id",
    component:EmployeeDetailsComponent
  },
  {
    path:"add-employee",
    component:AddEmployeeComponent
  },
  {
    path:"edit-employee/:id",
    component:EditEmployeeComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
