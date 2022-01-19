const {setup} = require('../integration/integrationTestSetup')

describe('Integration tests:', () => {
  let http;

  beforeAll(async () => {
    jest.setTimeout(50000);
    http = await setup();
  });

  test('should return a healthcheck response', async () => {
    const resp = await http.get('/healthcheck').set('Accept', 'application/json');
    expect(resp.status).toEqual(200);
    expect(resp.body.healthy);
  });

});
