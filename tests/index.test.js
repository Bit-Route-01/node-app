const request = require('supertest');
const app = require('../src/index');

test('GET / should return Hello, World!', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello, World!');
});
