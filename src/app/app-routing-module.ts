import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { AllEmployeesComponent } from "./all-employees/all-employees.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthguardGuard } from "./authguard.guard";
import { DeleteEmployeeComponent } from "./delete-employee/delete-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";

const route:Routes=[
{path:'allemp',component:AllEmployeesComponent,canActivate:[AuthguardGuard]},
{path:'Add-Emp',component:AddEmployeeComponent,canActivate:[AuthguardGuard]},
{path:'EditEmp/:id',component:EditEmployeeComponent,canActivate:[AuthguardGuard]},
{path:'DeleteEmp/:id',component:DeleteEmployeeComponent,canActivate:[AuthguardGuard]},
{path:'auth',component:AuthComponent}
];
@NgModule({
imports:[RouterModule.forRoot(route)],
exports:[RouterModule]
})
export class AppRoutingModule{

}