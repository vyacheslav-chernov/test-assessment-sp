import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameListComponent } from './frame-list.component';
import { MatchService } from '../../services/match-service';

describe('FrameListComponent', () => {
  let component: FrameListComponent;
  let fixture: ComponentFixture<FrameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameListComponent ],
      providers: [
        MatchService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('MatchResultComponent should create', () => {
    expect(component).toBeTruthy();
  });
});
