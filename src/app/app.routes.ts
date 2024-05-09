import { Routes } from '@angular/router';
import { CGFPComponent } from './cgfp/cgfp.component';
import { CgcpComponent } from './cgcp/cgcp.component';
import { HomeComponent } from './home/home.component';
import { NtidComponent } from './ntid/ntid.component';
import { NoesdpComponent } from './noesdp/noesdp.component';
import { StmpComponent } from './stmp/stmp.component';
import { CgfpEducationFormComponent } from './cgfp-education-form/cgfp-education-form.component';
import { CgfpEmploymentAgencyFormComponent } from './cgfp-employment-agency-form/cgfp-employment-agency-form.component';
import { CgfpFprEducationFormComponent } from './cgfp-fpr-education-form/cgfp-fpr-education-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stmp',
    component: StmpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cgfp',
    component: CGFPComponent,
    children: [
      { path: 'cgfp_education_reporting_form',
      component: CgfpFprEducationFormComponent },
      {
        path: 'cgfp_employment_agencies_form',
        component: CgfpEmploymentAgencyFormComponent,
      },
      {
        path: 'cgfp_institution_reporting_form',
        component:CgfpEducationFormComponent ,
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'cgcp',
    component: CgcpComponent,
    canActivate: [AuthGuard]
  },
  { path: 'ntid', component: NtidComponent ,canActivate: [AuthGuard]},
  { path: 'noesdp', component: NoesdpComponent ,canActivate: [AuthGuard]},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
