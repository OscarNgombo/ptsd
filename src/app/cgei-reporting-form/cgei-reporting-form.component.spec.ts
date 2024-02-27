import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgeiReportingFormComponent } from './cgei-reporting-form.component';

describe('CgeiReportingFormComponent', () => {
  let component: CgeiReportingFormComponent;
  let fixture: ComponentFixture<CgeiReportingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgeiReportingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgeiReportingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
