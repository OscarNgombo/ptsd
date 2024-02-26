import { Routes } from '@angular/router';
import { CGFPComponent } from './cgfp/cgfp.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'cgfp',
    component: CGFPComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
