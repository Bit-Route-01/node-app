//const request = require('supertest');
//const app = require('../src/index');

//test('GET / should return Hello, World!', async () => {
//  const response = await request(app).get('/');
//  expect(response.text).toBe('Hello, World!');
//});

const app = require('../src/index'); // Ensure you're importing the app
const request = require('supertest'); // Assuming you're using supertest for testing

let server;

beforeAll((done) => {
  server = app.listen(3000, (err) => {
    if (err) {
      return done(err); // Handle error starting the server
    }
    done();
  });
});

afterAll((done) => {
  server.close(done); // Close the server after all tests
});

test('sample test', async () => {
  const response = await request(server).get('/');
  expect(response.text).toBe('Hello, World!');
});