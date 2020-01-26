import { Component } from '@angular/core';
import { MatchService } from '../../services/match-service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent {

  constructor(
    private matchService: MatchService
  ) { }

}
