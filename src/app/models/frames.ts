export interface Frame {
    first: number;
    second: number;
}

export interface IFrames {
    frames: Frame[];
}

export class Match implements IFrames {
    private framesInstance: Frame[] = [];

    public get frames() { return this.framesInstance; }
    public get isEmpty() { return !this.framesInstance.length; }
    public get isOver() { return this.framesInstance.length === 10; }

    public addRound(round: Frame): Frame[] {
        this.framesInstance.push(round);
        return this.framesInstance;
    }
 }
