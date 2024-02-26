import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGFPComponent } from './cgfp.component';

describe('CGFPComponent', () => {
  let component: CGFPComponent;
  let fixture: ComponentFixture<CGFPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CGFPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CGFPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
