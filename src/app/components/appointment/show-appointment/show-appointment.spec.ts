import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppointment } from './show-appointment';

describe('ShowAppointment', () => {
  let component: ShowAppointment;
  let fixture: ComponentFixture<ShowAppointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAppointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAppointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
