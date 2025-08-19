import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelivery } from './show-delivery';

describe('ShowDelivery', () => {
  let component: ShowDelivery;
  let fixture: ComponentFixture<ShowDelivery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDelivery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDelivery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
