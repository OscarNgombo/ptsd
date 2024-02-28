import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoesdpComponent } from './noesdp.component';

describe('NoesdpComponent', () => {
  let component: NoesdpComponent;
  let fixture: ComponentFixture<NoesdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoesdpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoesdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
