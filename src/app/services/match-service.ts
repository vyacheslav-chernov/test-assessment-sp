import { Injectable } from '@angular/core';

import { Match, Frame } from '../models/frames';

@Injectable()
export class MatchService {

    private match: Match;

    public addFrameToCurrentMatch(frame: Frame ): void {
        this.match = this.match || new Match();
        this.match.addFrame(frame);
    }

}
