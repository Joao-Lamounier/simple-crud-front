import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Cidade, People } from '../model/people';
import { PeoplesService } from '../services/peoples.service';

export const peopleResolver: ResolveFn<Observable<People>> = (
  route,
  state,
  service: PeoplesService = inject(PeoplesService)
): Observable<People> => {
  if (route.params?.['id']) {
    return service.loadById(route.params['id']);
  }

  return of({
    id: 0,
    nome: '',
    apelido: '',
    time: '',
    cpf: '',
    hobbie: '',
    cidade: { id: 0, nome: '', estado: '' } as Cidade,
  } as People);
};
