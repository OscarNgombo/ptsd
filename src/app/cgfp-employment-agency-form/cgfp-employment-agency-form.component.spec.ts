import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgfpEmploymentAgencyFormComponent } from './cgfp-employment-agency-form.component';

describe('CgfpEmploymentAgencyFormComponent', () => {
  let component: CgfpEmploymentAgencyFormComponent;
  let fixture: ComponentFixture<CgfpEmploymentAgencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgfpEmploymentAgencyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgfpEmploymentAgencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
