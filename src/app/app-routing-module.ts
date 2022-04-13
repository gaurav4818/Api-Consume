import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { AllEmployeesComponent } from "./all-employees/all-employees.component";
import { DeleteEmployeeComponent } from "./delete-employee/delete-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";

const route:Routes=[
{path:'allemp',component:AllEmployeesComponent},
{path:'Add-Emp',component:AddEmployeeComponent},
{path:'EditEmp/:id',component:EditEmployeeComponent},
{path:'DeleteEmp/:id',component:DeleteEmployeeComponent},
];
@NgModule({
imports:[RouterModule.forRoot(route)],
exports:[RouterModule]
})
export class AppRoutingModule{

}