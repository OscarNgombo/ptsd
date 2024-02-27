import { Routes } from '@angular/router';
import { CGFPComponent } from './cgfp/cgfp.component';
import { CgcpComponent } from './cgcp/cgcp.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cgfp',
    component: CGFPComponent,
  },
  {
    path: 'cgcp',
    component: CgcpComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
