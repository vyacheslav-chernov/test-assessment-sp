export interface Frame {
    first: number;
    second: number;
}

export interface IFrames {
    frames: Frame[];
}

export interface Score {
    score: number;
}

export class Match {
    private framesInstance: Frame[] = [];

    public get frames(): IFrames { return { frames: this.framesInstance }; }
    public get isEmpty() { return !this.framesInstance.length; }
    public get isOver() { return this.framesInstance.length === 10; }
    public get score(): Score {
        return { score : this.framesInstance.reduce((prev: number, frame: Frame) => prev + frame.first + frame.second, 0) };
    }

    public addRound(round: Frame): IFrames {
        this.framesInstance.push(round);
        return this.frames;
    }
 }
