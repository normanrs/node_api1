const express = require('express');
const supertest = require('supertest');

const setup = async () => {
  const app = express();
  const router = require('../../lib/routes');
  app.use('/', router);
  return supertest(app);
};

module.exports = {
  setup,
};
