import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPayment } from './show-payment';

describe('ShowPayment', () => {
  let component: ShowPayment;
  let fixture: ComponentFixture<ShowPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
