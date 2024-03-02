import { Routes } from '@angular/router';
import { CGFPComponent } from './cgfp/cgfp.component';
import { CgcpComponent } from './cgcp/cgcp.component';
import { HomeComponent } from './home/home.component';
import { NtidComponent } from './ntid/ntid.component';
import { NoesdpComponent } from './noesdp/noesdp.component';
import { StmpComponent } from './stmp/stmp.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'stmp',
    component: StmpComponent,
  }
  ,
  {
    path: 'cgfp',
    component: CGFPComponent,
  },
  {
    path: 'cgcp',
    component: CgcpComponent,
  },
  { path: 'ntid',
  component: NtidComponent,
  },
  { path: 'noesdp',
  component: NoesdpComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
