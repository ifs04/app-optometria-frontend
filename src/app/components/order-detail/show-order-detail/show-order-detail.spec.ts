import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrderDetail } from './show-order-detail';

describe('ShowOrderDetail', () => {
  let component: ShowOrderDetail;
  let fixture: ComponentFixture<ShowOrderDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowOrderDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOrderDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
