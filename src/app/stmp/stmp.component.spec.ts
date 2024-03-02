import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StmpComponent } from './stmp.component';

describe('StmpComponent', () => {
  let component: StmpComponent;
  let fixture: ComponentFixture<StmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
