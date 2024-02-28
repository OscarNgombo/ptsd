import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtidComponent } from './ntid.component';

describe('NtidComponent', () => {
  let component: NtidComponent;
  let fixture: ComponentFixture<NtidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NtidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NtidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
