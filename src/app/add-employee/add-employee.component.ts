import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  signupforms!:FormGroup

  constructor(private empservice:EmpServiceService,private route:Router,private routes:ActivatedRoute) { }


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
     this.empservice.AddEmployee(form.value).subscribe(data=>{
       alert(data.empName+' Added Successfully!');
       this.route.navigate(['../allemp'],{relativeTo:this.routes});
      
     });
     
     
  }

}
