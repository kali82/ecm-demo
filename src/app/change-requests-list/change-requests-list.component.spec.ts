import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRequestsListComponent } from './change-requests-list.component';

describe('ChangeRequestsListComponent', () => {
  let component: ChangeRequestsListComponent;
  let fixture: ComponentFixture<ChangeRequestsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeRequestsListComponent]
    });
    fixture = TestBed.createComponent(ChangeRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
