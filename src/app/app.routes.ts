import { Routes } from '@angular/router';
import { Qualification } from './Qualification';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { authGuardGuard } from './auth-guard.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeSearchResultComponent } from "./employee-search-result/employee-search-result.component";

export const routes: Routes = [
  { path: "", component: LandingPageComponent },
  {
    path: "qualifications",
    component: QualificationsComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: "employees",
    component: EmployeeListComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'detail/:id',
    component: EmployeeDetailComponent,
    canActivate: [authGuardGuard],
  },
  /*{
    path: 'create',
    component: EmployeeCreateComponent,
    canActivate: [authGuardGuard],
  }*/
    path: "searchEmployees",
    component: EmployeeSearchResultComponent,
    canActivate: [authGuardGuard],
  },
];
