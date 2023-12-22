import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-peoples-form',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule],
  templateUrl: './peoples-form.component.html',
  styleUrl: './peoples-form.component.scss',
})
export class PeoplesFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: [null],
      apelido: [null],
      time: [null],
      cpf: [null],
      hobbie: [null],
      cidade: this.formBuilder.group({
        nome: [null],
        estado: [null],
      }),
    });
  }
  ngOnInit(): void {}
}
