import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOptometry } from './show-optometry';

describe('ShowOptometry', () => {
  let component: ShowOptometry;
  let fixture: ComponentFixture<ShowOptometry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowOptometry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOptometry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
