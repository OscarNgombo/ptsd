import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgfpEducationFormComponent } from './cgfp-education-form.component';

describe('CgfpEducationFormComponent', () => {
  let component: CgfpEducationFormComponent;
  let fixture: ComponentFixture<CgfpEducationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgfpEducationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgfpEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
