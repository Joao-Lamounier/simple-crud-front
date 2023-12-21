import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'peoples' },
  {
    path: 'peoples',
    loadChildren: () => import('./peoples/peoples.module').then(m => m.PeoplesModule)
  },
];
