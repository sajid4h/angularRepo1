import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OblistComponent } from './oblist.component';

describe('OblistComponent', () => {
  let component: OblistComponent;
  let fixture: ComponentFixture<OblistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OblistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
