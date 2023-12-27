
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplesComponent } from './containers/peoples/peoples.component';
import { PeoplesFormComponent } from './containers/peoples-form/peoples-form.component';
import { peopleResolver } from './guards/people.resolver';

const routes: Routes = [
  { path: '', component: PeoplesComponent },
  { path: 'new', component: PeoplesFormComponent },
  { path: 'edit/:id', component: PeoplesFormComponent, resolve:{people: peopleResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeoplesRoutingModule {}
