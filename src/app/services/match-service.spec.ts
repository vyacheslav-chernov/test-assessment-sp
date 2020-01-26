import { MatchService } from './match-service';

describe('MatchService', () => {
    let service: MatchService;
    beforeEach(() => { service = new MatchService(); });

    it('Match service must exist', () => {
        expect(service).toBeDefined();
    });

  });
