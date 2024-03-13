import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgfpFprEducationFormComponent } from './cgfp-fpr-education-form.component';

describe('CgfpFprEducationFormComponent', () => {
  let component: CgfpFprEducationFormComponent;
  let fixture: ComponentFixture<CgfpFprEducationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgfpFprEducationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgfpFprEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
