import { RouterModule, Routes } from '@angular/router';
import { Router } from 'express';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'peoples' },
  {
    path: 'peoples',
    loadChildren: () => import('./peoples/peoples.module').then(m => m.PeoplesModule)
  },
];
