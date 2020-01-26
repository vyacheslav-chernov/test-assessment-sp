import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatchService } from '../../services/match-service';

@Component({
  selector: 'app-round-input-form',
  templateUrl: './round-input-form.component.html',
  styleUrls: ['./round-input-form.component.scss']
})
export class RoundInputFormComponent {

  public roundForm = new FormGroup({
    first: new FormControl('', [ Validators.required ]),
    second: new FormControl('', [ Validators.required ])
  });

  constructor(
    private matchService: MatchService
  ) { }

  public onSendResult(): void {
    const controls = this.roundForm.controls;
    this.matchService.addFrameToCurrentMatch({
      first: controls.first.value,
      second: controls.second.value
    });
  }

}
