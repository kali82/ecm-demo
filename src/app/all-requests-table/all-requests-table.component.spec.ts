import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestsTableComponent } from './all-requests-table.component';

describe('AllRequestsTableComponent', () => {
  let component: AllRequestsTableComponent;
  let fixture: ComponentFixture<AllRequestsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRequestsTableComponent]
    });
    fixture = TestBed.createComponent(AllRequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
