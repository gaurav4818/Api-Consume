import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api-Consume';
   signupforms!:FormGroup
   constructor(private http:HttpClient) { }
 
   ngOnInit() {
     this.signupforms=new FormGroup({
       'EmpName':new FormControl(null,Validators.required),
       'EmpDesignation':new FormControl(null,Validators.required),
       'EmpPassword':new FormControl(null,Validators.minLength(5)),
       'EmpSalary':new FormControl(null,Validators.required),
        });
   }
   onSubmits(form:FormGroup)
   {
     this.http.post('http://localhost:58669/api/Employee/AddEmployee',form.value)
     .subscribe(responsedata=>{
       console.log(responsedata);
     });
   }
   onfetch()
   {
    this.http.get('http://localhost:58669/api/Employee').subscribe(data=> {
      console.log(data);
    });
   
   }
}
