const queries = require('../../src/queries');


describe('queries', () => {

    it('should ensure db connection', async () => {
        const result = await queries.healthcheck();
        expect(result);
    });

    it('should return a random city', async () => {
        const result = await queries.randomCity();
        expect(result).toHaveProperty('zipcode');
    });

    it('should return cities that start with search term', async () => {
        const result = await queries.citySearch('holt', 10);
        expect(result.length).toBeGreaterThan(0);
    });

});
