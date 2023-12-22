import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PeoplesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [MatTableModule, ReactiveFormsModule],
})
export class PeoplesModule {}
