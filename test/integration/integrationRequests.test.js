const setup = require('../integrationTestSetup')

describe('Integration tests:', () => {
  let http;

  beforeAll(async () => {
    jest.setTimeout(50000);
    http = await setup();
  });

  test('should return a healthcheck response', async () => {
    const resp = await http.get('/healthcheck');
    expect(resp.status).toEqual(200);
    expect(resp.body.healthy);
  });

  test('should return a city at random response', async () => {
    const resp = await http.get('/randomCity');
    expect(resp.status).toEqual(200);
    expect(resp.body).toHaveProperty('zipcode');
  });

  test('should return cities matching search', async () => {
    const testQuery = {name: 'holt', limit: 20}
    const resp = await http.get('/citySearch')
        .query(testQuery);
    expect(resp.status).toEqual(200);
    expect(resp.body).toBeInstanceOf(Array);
  });

});
