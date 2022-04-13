import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editforms!:FormGroup;
  Employee:any;
  id!:number;
  constructor(private empservice:EmpServiceService,private route:Router,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    /*this.routes.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      console.log(this.id);
      this.initform();
    });*/
    this.getoneemp();
    console.log("method called");
  }
  private getoneemp()
  {
      this.id=+this.routes.snapshot.paramMap.get('id')!;
     
      console.log(this.id);
      this.empservice.GetOneEmployee(this.id).subscribe(result=> {
      this.Employee=result;
      console.log(this.Employee);
      console.log(this.Employee.empName);

      this.editforms=new FormGroup({
        'Id':new FormControl(this.Employee.id,Validators.required),
        'EmpName':new FormControl(this.Employee.empName,Validators.required),
        'EmpDesignation':new FormControl(this.Employee.empDesignation,Validators.required),
        'EmpPassword':new FormControl(this.Employee.empPassword,Validators.minLength(5)),
        'EmpSalary':new FormControl(this.Employee.empSalary,Validators.required),
         });     
     });
     
  }
  onUpdate(form:FormGroup)
  {
    console.log(form.value);
     this.empservice.EditEmployee(this.id,form.value).subscribe(data=>{
      alert(data.empName+' Updated Successfully!');
      this.route.navigate(['/allemp'],{relativeTo:this.routes});
     });
  }
}
