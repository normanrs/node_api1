const queries = require('../../lib/queries');
jest.mock('../../lib/db');

describe('queries', () => {

    it('should throw error on no db connection', async () => {
        try {
            await queries.healthcheck();
          } catch (err) {
            expect(err).toHaveProperty('stack');
          }
    });

});
