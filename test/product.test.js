const request = require('supertest');
const app = require('../src/app');

describe('Products API', () => {

  it('should create a product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'Laptop',
        price: 1000,
        stock: 5
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Laptop');
  });

  it('should get all products', async () => {
    const response = await request(app)
      .get('/products');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});