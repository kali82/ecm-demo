import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangeRequestComponent } from './form-change-request.component';

describe('FormChangeRequestComponent', () => {
  let component: FormChangeRequestComponent;
  let fixture: ComponentFixture<FormChangeRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormChangeRequestComponent]
    });
    fixture = TestBed.createComponent(FormChangeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
