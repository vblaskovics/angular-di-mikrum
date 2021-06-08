import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsDemoComponent } from './analytics-demo.component';

describe('AnalyticsDemoComponent', () => {
  let component: AnalyticsDemoComponent;
  let fixture: ComponentFixture<AnalyticsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
