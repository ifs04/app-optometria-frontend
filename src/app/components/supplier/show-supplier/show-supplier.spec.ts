import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSupplier } from './show-supplier';

describe('ShowSupplier', () => {
  let component: ShowSupplier;
  let fixture: ComponentFixture<ShowSupplier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSupplier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSupplier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
