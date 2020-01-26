import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchResultComponent } from './match-result.component';
import { MatchService } from '../../services/match-service';

describe('MatchResultComponent', () => {
  let component: MatchResultComponent;
  let fixture: ComponentFixture<MatchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchResultComponent ],
      providers: [
        MatchService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('MatchResultComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
