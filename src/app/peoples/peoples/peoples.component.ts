import { Component } from '@angular/core';
import { People } from '../model/people';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-peoples',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss'],
})
export class PeoplesComponent {
  peoples: People[] = [
    {id: 1, nome: 'João Felipe', apelido: 'Jão', time: 'Cruzeiro', cpf: '08545360606', hobbie: 'estudar', cidade: {id: 1, nome: 'Camacho', estado: 'MG'}}
  ];
  displayedColumns = ['nome', 'apelido', 'time', 'cpf', 'hobbie', 'cidade'];
}
