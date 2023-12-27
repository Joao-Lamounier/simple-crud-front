import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { peopleResolver } from './people.resolver';

describe('peopleResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => peopleResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
