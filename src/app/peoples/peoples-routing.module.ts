import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplesComponent } from './containers/peoples/peoples.component';
import { PeoplesFormComponent } from './containers/peoples-form/peoples-form.component';


const routes: Routes = [
  { path: '', component: PeoplesComponent },
  { path: 'new', component: PeoplesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeoplesRoutingModule {}
