import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match-service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent implements OnInit{

  public score: number;

  constructor(
    private matchService: MatchService
  ) { }

  public ngOnInit(): void {
    this.matchService.matchChanged.subscribe(() => this.score = this.matchService.getScoreCurrentMatch().score);
  }

}
