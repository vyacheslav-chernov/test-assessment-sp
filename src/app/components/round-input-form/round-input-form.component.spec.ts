import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RoundInputFormComponent } from './round-input-form.component';
import { MatchService } from '../../services/match-service';

describe('RoundInputFormComponent', () => {
  let component: RoundInputFormComponent;
  let fixture: ComponentFixture<RoundInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ RoundInputFormComponent ],
      providers: [
        MatchService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('RoundInputFormComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
