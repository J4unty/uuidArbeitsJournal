import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnReportCardComponentComponent } from './learn-report-card-component.component';

describe('LearnReportCardComponentComponent', () => {
  let component: LearnReportCardComponentComponent;
  let fixture: ComponentFixture<LearnReportCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnReportCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnReportCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
