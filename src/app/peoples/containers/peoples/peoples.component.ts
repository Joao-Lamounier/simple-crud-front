import { PeoplesService } from '../../services/peoples.service';
import { Component, OnInit } from '@angular/core';
import { People } from '../../model/people';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { Observable, catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '../../../shared/shared.module';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PeoplesListComponent } from '../../components/peoples-list/peoples-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { relative } from 'path';

@Component({
  selector: 'app-peoples',
  standalone: true,
  imports: [
    AppMaterialModule,
    CommonModule,
    SharedModule,
    PeoplesListComponent,
  ],
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})
export class PeoplesComponent implements OnInit {
  peoples$: Observable<People[]>;

  constructor(
    private peoplesService: PeoplesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.peoples$ = this.peoplesService.findAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar pessoas cadastradas.');
        return of([]);
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  refresh() {
    this.peoples$ = this.peoplesService.findAll().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar pessoas cadastradas.');
        return of([]);
      })
    );
  }
  ngOnInit(): void {}
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  onEdit(people: People) {
    this.router.navigate(['edit', people.id], { relativeTo: this.route });
  }
  onRemove(people: People) {
    this.peoplesService.remove(people.id).subscribe(() => {
      this.refresh();
      this.snackBar.open('Pessoa removida com sucesso!', '', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    });
  }
  onDownload() {
    this.peoplesService.download().subscribe(
      (data: any) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'planilha.xlsx';
        link.click();
      },
      (error) => {
        console.error('Erro ao baixar o arquivo', error);
        this.onError('Erro ao baixar a planilha.');
      }
    );
  }
}
