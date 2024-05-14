import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentAgenciesComponent } from './employment-agencies.component';

describe('EmploymentAgenciesComponent', () => {
  let component: EmploymentAgenciesComponent;
  let fixture: ComponentFixture<EmploymentAgenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentAgenciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploymentAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
