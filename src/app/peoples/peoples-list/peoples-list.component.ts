import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { People } from '../model/people';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-peoples-list',
  standalone: true,
  imports: [
    AppMaterialModule,
    CommonModule,
    SharedModule,
    PeoplesListComponent,
  ],
  templateUrl: './peoples-list.component.html',
  styleUrl: './peoples-list.component.scss',
})
export class PeoplesListComponent implements OnInit {
  @Input() peoples: People[] = [];
  @Output() add = new EventEmitter(false);
  readonly displayedColumns = [
    'nome',
    'apelido',
    'time',
    'cpf',
    'hobbie',
    'cidade',
    'actions',
  ];
  constructor() {}
  ngOnInit(): void {}
  onAdd() {
    this.add.emit(true);
  }
}
