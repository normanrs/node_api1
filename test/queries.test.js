const queries = require('../lib/queries');
const req = {};
const res = any = {
    json: jest.fn(),
    status: function(code) {return code},
};

describe('queries', () => {

    it('should ensure db connection', () => {
        const conn = queries.ensureDbConn(req, res);
        expect(conn);
    });

    it('should return city data by name', () => {
        const conn = queries.getCities(req, res);
        expect(conn);
    });

});
