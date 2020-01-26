import { Component } from '@angular/core';

import { MatchService } from 'src/app/services/match-service';

@Component({
  selector: 'app-frame-list',
  templateUrl: './frame-list.component.html',
  styleUrls: ['./frame-list.component.scss']
})
export class FrameListComponent {

  constructor(
    private matchService: MatchService
  ) { }

}
