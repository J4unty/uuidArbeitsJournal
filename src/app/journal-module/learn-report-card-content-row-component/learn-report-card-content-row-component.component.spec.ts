import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnReportCardContentRowComponentComponent } from './learn-report-card-content-row-component.component';

describe('LearnReportCardContentRowComponentComponent', () => {
  let component: LearnReportCardContentRowComponentComponent;
  let fixture: ComponentFixture<LearnReportCardContentRowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnReportCardContentRowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnReportCardContentRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
