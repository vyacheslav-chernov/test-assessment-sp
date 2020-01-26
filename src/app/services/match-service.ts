import { Injectable, EventEmitter, OnDestroy } from '@angular/core';

import { Match, Frame, IFrames } from '../models/frames';

@Injectable()
export class MatchService implements OnDestroy {

    public matchChanged: EventEmitter<IFrames> = new EventEmitter(true);

    private match: Match;

    public addFrameToCurrentMatch(frame: Frame ): void {
        this.match = this.match || new Match();
        this.matchChanged.next(this.match.addFrame(frame));
    }

    public ngOnDestroy(): void {
        this.matchChanged.complete();
    }

}
