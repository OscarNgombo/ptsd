import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgcpComponent } from './cgcp.component';

describe('CgcpComponent', () => {
  let component: CgcpComponent;
  let fixture: ComponentFixture<CgcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CgcpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CgcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
