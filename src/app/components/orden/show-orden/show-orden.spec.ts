import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrden } from './show-orden';

describe('ShowOrden', () => {
  let component: ShowOrden;
  let fixture: ComponentFixture<ShowOrden>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowOrden]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOrden);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
