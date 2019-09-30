import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninCompComponent } from './signin-comp.component';

describe('SigninCompComponent', () => {
  let component: SigninCompComponent;
  let fixture: ComponentFixture<SigninCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
