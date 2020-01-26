import { Component, OnInit } from '@angular/core';

import { MatchService } from 'src/app/services/match-service';
import { IFrames, Frame } from 'src/app/models/frames';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.scss']
})
export class FrameListComponent implements OnInit {

  public frames: Frame[];

  constructor(
    private matchService: MatchService
  ) { }

  public ngOnInit(): void {
    this.matchService.matchChanged.subscribe((frames: IFrames) => this.frames = frames.frames);
  }

}
