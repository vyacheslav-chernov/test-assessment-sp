import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RoundInputFormComponent } from './components/round-input-form/round-input-form.component';
import { MatchResultComponent } from './components/match-result/match-result.component';
import { FrameListComponent } from './components/frame-list/frame-list.component';
import { MatchService } from './services/match-service';

describe('Main component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RoundInputFormComponent,
        FrameListComponent,
        MatchResultComponent,
      ],
      providers: [
        MatchService,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
