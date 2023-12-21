import { PeoplesService } from './../services/peoples.service';
import { Component } from '@angular/core';
import { People } from '../model/people';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peoples',
  standalone: true,
  imports: [AppMaterialModule, CommonModule],
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})
export class PeoplesComponent {
  peoples$: Observable<People[]>;
  displayedColumns = ['nome', 'apelido', 'time', 'cpf', 'hobbie', 'cidade'];

  constructor(private peoplesService: PeoplesService) {
    this.peoples$ = this.peoplesService.findAll();
  }
}
