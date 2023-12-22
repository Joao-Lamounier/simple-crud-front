import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PeoplesService } from './peoples/services/peoples.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  providers: [PeoplesService, RouterModule]
})
export class AppModule {}
