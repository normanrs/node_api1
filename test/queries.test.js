const queries = require('../lib/queries');
const req = {};
const res = {};

describe('queries', () => {

    it('should ensure db connection', () => {
        const conn = queries.ensureDbConn(req, res);
        expect(conn);
    });

    it('should return city data by name', () => {
        const conn = queries.getCitiesByName('Holt');
        expect(conn);
    });

});
