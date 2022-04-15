import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  BaseUrl='http://localhost:58669/api/Employee';
  constructor(private http:HttpClient) 
  { }
  GetAllEmployee() : Observable<any>
  {
    return this.http.get(this.BaseUrl);
  }
  AddEmployee(Emp:any):Observable<any>
  {
   return this.http.post(this.BaseUrl+'/AddEmployee',Emp);
  }
  EditEmployee(empid:any,Emp:any):Observable<any>
  {
   return this.http.put(this.BaseUrl+'/EditEmployee/'+empid,Emp);
  }
  GetOneEmployee(empid:any) : Observable<any>
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id',empid);
    return this.http.get(this.BaseUrl+'/GetOneEmp',{params:queryParams});
  }
  DeleteEmployee(empid:any):Observable<any>
  {
    return this.http.delete(this.BaseUrl+'/'+empid,{responseType:'text'});
  }
}
