import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesListComponent } from './peoples-list.component';

describe('PeoplesListComponent', () => {
  let component: PeoplesListComponent;
  let fixture: ComponentFixture<PeoplesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeoplesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeoplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
