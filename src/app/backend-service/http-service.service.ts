import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseURL : string = "http://localhost:8080/api/";

  constructor(private http:HttpClient) { }

  fetchAllRecord()
  {
    return this.http.get(`${this.baseURL}getEmployees`);
  }

  fetchRecordById(id:any)
  {
    return this.http.get(`${this.baseURL}getEmployeeById/${id}`)
  }
  fetchAllAddressRecord()
  {
   return this.http.get(`${this.baseURL}getAddresses`);
  }
  createEmployee(addEmpData:Employee)
  {
    return this.http.post(`${this.baseURL}addEmployee`,addEmpData,{
      responseType:"text"
    });
  }

  modifyEmployee(jsonObj:any)
  {
   return this.http.put(`${this.baseURL}updateEmployee`,jsonObj,{
    responseType:"text"
   });
  }
  removeEmpById(id:number){
    return this.http.delete(`${this.baseURL}deleteEmployee/${id}`,{
      responseType:"text"
    })
  }
}
