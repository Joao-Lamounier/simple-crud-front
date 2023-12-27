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
    private route: ActivatedRoute
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
  ngOnInit(): void {}
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
