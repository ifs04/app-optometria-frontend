import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPatient } from './show-patient';

describe('ShowPatient', () => {
  let component: ShowPatient;
  let fixture: ComponentFixture<ShowPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
