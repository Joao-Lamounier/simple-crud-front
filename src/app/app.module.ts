import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PeoplesService } from './peoples/services/peoples.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [PeoplesService]
})
export class AppModule {}
