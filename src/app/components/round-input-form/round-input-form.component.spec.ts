import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundInputFormComponent } from './round-input-form.component';

describe('RoundInputFormComponent', () => {
  let component: RoundInputFormComponent;
  let fixture: ComponentFixture<RoundInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
