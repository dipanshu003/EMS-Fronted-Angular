import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [

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
    path:"**",
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
