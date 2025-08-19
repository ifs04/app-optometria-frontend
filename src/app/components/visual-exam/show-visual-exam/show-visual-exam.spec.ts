import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVisualExam } from './show-visual-exam';

describe('ShowVisualExam', () => {
  let component: ShowVisualExam;
  let fixture: ComponentFixture<ShowVisualExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowVisualExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVisualExam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
