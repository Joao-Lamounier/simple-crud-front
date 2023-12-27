import { Cidade } from '../../model/people';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { AppComponent } from '../../../app.component';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { conformToMask } from 'text-mask-core';
import { TextMaskModule } from 'angular2-text-mask';
import { PeoplesService } from '../../services/peoples.service';
import { People } from '../../model/people';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peoples-form',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule],
  templateUrl: './peoples-form.component.html',
  styleUrls: ['./peoples-form.component.scss'],
})
export class PeoplesFormComponent implements OnInit {
  form: FormGroup;
  pessoa: People | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private service: PeoplesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
      apelido: [null],
      time: [null],
      cpf: [null],
      hobbie: [null],
      cidade: [null],
      estado: [null],
    });
  }
  get nome() {
    return this.form.get('nome');
  }
  get apelido() {
    return this.form.get('apelido');
  }
  get time() {
    return this.form.get('time');
  }
  get cpf() {
    return this.form.get('cpf');
  }
  get cidade() {
    return this.form.get('cidade');
  }
  get estado() {
    return this.form.get('estado');
  }
  get hobbie() {
    return this.form.get('hobbie');
  }

  ngOnInit(): void {
    const people: People | undefined = this.route.snapshot.data['people'];
    if (people) {
      this.form.setValue({
        id: people.id,
        nome: people.nome,
        apelido: people.apelido,
        time: people.time,
        cpf: people.cpf,
        cidade: people.cidade.nome,
        hobbie: people.hobbie,
        estado: people.cidade.estado,
      });
    }
  }

  onSubmit(): void {
    this.buildPeople();
    console.log(this.pessoa);
    this.service.save(this.pessoa!).subscribe(
      (result) => this.onSucess(),
      (error) => this.onError()
    );
  }
  onCancel() {
    this.location.back();
  }
  buildPeople() {
    this.pessoa = {
      id: this.form.value.id,
      nome: this.nome?.value,
      apelido: this.apelido?.value,
      time: this.time?.value,
      cpf: this.cpf?.value,
      hobbie: this.hobbie?.value,
      cidade: this.buildCidade(),
    };
  }

  buildCidade() {
    const cidadeExistente: Cidade | undefined = this.route.snapshot.data['people']?.cidade;
    const cdd: Cidade = {
      id: cidadeExistente ? cidadeExistente.id : 1,
      nome: this.cidade?.value,
      estado: this.estado?.value,
    };
    return cdd;
  }
  private onSucess() {
    this.snackBar.open('Pessoa salva com sucesso!', '', {
      duration: 5000,
    });
    this.location.back();
  }
  private onError() {
    this.snackBar.open('Erro ao cadastrar!', '', { duration: 5000 });
  }
}
