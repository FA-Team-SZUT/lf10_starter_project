import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListContentComponent } from './employee-list-content.component';

describe('EmployeeListContentComponent', () => {
  let component: EmployeeListContentComponent;
  let fixture: ComponentFixture<EmployeeListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
