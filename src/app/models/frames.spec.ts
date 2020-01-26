import { Frame, Match } from './frames';

describe('Model for frames must exist', () => {

    const match = new Match();
    const testRound: Frame = {
        first: 10,
        second: 10
    };
    const firstResult = { score : 20 };

    it('should create Match instance', () => {
        expect(match).toBeTruthy();
    });

    it('method addRound must exist, works and returns frames, score must be valid', () => {
        expect(match.addFrame).toBeTruthy();
        const currentframes = match.addFrame(testRound);
        expect(currentframes).toBeTruthy();
        expect(currentframes.frames).toBeTruthy();
        expect(match.score.score).toEqual(firstResult.score);
    });

});
