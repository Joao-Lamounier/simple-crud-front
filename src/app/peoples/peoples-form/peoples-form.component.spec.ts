import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesFormComponent } from './peoples-form.component';

describe('PeoplesFormComponent', () => {
  let component: PeoplesFormComponent;
  let fixture: ComponentFixture<PeoplesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeoplesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeoplesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
