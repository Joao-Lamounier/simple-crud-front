import { PeoplesService } from './../services/peoples.service';
import { Component, OnInit } from '@angular/core';
import { People } from '../model/people';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Observable, catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-peoples',
  standalone: true,
  imports: [AppMaterialModule, CommonModule, SharedModule],
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})
export class PeoplesComponent implements OnInit {
  peoples$: Observable<People[]>;
  displayedColumns = ['nome', 'apelido', 'time', 'cpf', 'hobbie', 'cidade'];

  constructor(
    private peoplesService: PeoplesService,
    public dialog: MatDialog
  ) {
    this.peoples$ = this.peoplesService.findAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar pessoas cadastradas.')
        return of([]);
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  ngOnInit(): void {}
}
