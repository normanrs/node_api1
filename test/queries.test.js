const queries = require('../lib/queries');


describe('queries', () => {

    it('should ensure db connection', async () => {
        const result = await queries.healthcheck();
        expect(result);
    });

    it('should return a random city', async () => {
        const result = await queries.randomCity();
        expect(result).toHaveProperty('zipcode');
    });

    it('should return city search results', async () => {
        const result = await queries.citySearch('holt', 10);
        expect(result.length).toBeGreaterThan(0);
    });

});
