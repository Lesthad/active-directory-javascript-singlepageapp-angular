import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallwebapiComponent } from './callwebapi.component';

describe('CallwebapiComponent', () => {
  let component: CallwebapiComponent;
  let fixture: ComponentFixture<CallwebapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallwebapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallwebapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
