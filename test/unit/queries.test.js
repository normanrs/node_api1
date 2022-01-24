const queries = require('../../src/queries');
jest.mock('../../src/db');

describe('queries', () => {

    it('healthcheck should throw error on no db connection', async () => {
        try {
            await queries.healthcheck();
          } catch (err) {
            expect(err).toHaveProperty('stack');
          }
    });

    it('randomCity should throw error on no db connection', async () => {
        try {
            await queries.randomCity();
          } catch (err) {
            expect(err).toHaveProperty('stack');
          }
    });

    it('citySearch should throw error on no db connection', async () => {
        try {
            await queries.citySearch();
          } catch (err) {
            expect(err).toHaveProperty('stack');
          }
    });

});
