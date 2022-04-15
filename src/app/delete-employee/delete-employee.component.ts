import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  Employee:any;
  id!:number;
  constructor(private empservice:EmpServiceService,private route:Router,private routes:ActivatedRoute) { }

  ngOnInit(): void {
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
     });
     
  }
  onDelete()
  {
      if(confirm('Are you sure want to delete '+this.Employee.empName+' details.'))
     {
       this.empservice.DeleteEmployee(this.id).subscribe(data=>{
       console.log(data);
      });
      
      this.route.navigate(['/allemp'],{relativeTo:this.routes});
     }
  }

}
