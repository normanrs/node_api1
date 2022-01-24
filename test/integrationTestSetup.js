const express = require('express');
const supertest = require('supertest');

const setup = async () => {
  const app = express();
  const router = require('../src/routes');
  app.use('/', router);
  return supertest(app);
};

module.exports = setup;
