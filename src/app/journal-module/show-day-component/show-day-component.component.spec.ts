import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDayComponentComponent } from './show-day-component.component';

describe('ShowDayComponentComponent', () => {
  let component: ShowDayComponentComponent;
  let fixture: ComponentFixture<ShowDayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
