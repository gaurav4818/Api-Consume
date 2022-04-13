import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  AllEmployee:any;
  id!:Number;
  constructor(private empservice:EmpServiceService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    
    this.getallemp();
    
  }
  private getallemp()
  {
     this.empservice.GetAllEmployee()
     .subscribe(result=> {
      this.AllEmployee=result;
     });
  }
  onaddemp()
  {
     this.routes.navigate(['../Add-Emp'],{relativeTo:this.route});
  }

}
