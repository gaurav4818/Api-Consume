import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , DoCheck{
  title = 'Api-Consume';
  userLogged!:boolean;
  signupforms!:FormGroup
   constructor(private http:HttpClient,private authservice:AuthService,private route:Router,private routes:ActivatedRoute) { }
  ngDoCheck(): void {
    this.userLogged=this.authservice.isAuthenticate;
  }
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
   onlogout()
   {
     this.authservice.Logout();
     this.userLogged=false;
     this.route.navigate(['/auth'],{relativeTo:this.routes});  
     
   }
   
}
