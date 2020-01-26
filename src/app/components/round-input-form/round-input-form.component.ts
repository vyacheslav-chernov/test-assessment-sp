import { Component } from '@angular/core';
import { MatchService } from '../../services/match-service';

@Component({
  selector: 'app-round-input-form',
  templateUrl: './round-input-form.component.html',
  styleUrls: ['./round-input-form.component.scss']
})
export class RoundInputFormComponent {

  constructor(
    private matchService: MatchService
  ) { }

}
