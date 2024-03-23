import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeeventComponent } from './formeevent.component';

describe('FormeeventComponent', () => {
  let component: FormeeventComponent;
  let fixture: ComponentFixture<FormeeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormeeventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormeeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
