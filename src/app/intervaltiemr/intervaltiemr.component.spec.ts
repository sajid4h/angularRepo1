import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaltiemrComponent } from './intervaltiemr.component';

describe('IntervaltiemrComponent', () => {
  let component: IntervaltiemrComponent;
  let fixture: ComponentFixture<IntervaltiemrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervaltiemrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntervaltiemrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
