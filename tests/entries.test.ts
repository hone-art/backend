import request from 'supertest'
import app from '../index'
//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()
beforeAll(async() => {
 
});

afterAll(async() => {

});

describe('GET /entries/:id', () => {
  test('Should return entries by id', async () => {
    const fetchResponse = await request(app).get("/entries/2");
    const response = fetchResponse.body;
    expect(fetchResponse.statusCode).toBe(200);
    expect(response.description).toStrictEqual("Yes!");
  });
});

describe('GET /entries/users/:userId', () => {
    it('Should return entries by user id', async () => {
      const fetchResponse = await request(app).get("/entries/users/10");
      const response = fetchResponse.body[0]["description"];
      expect(fetchResponse.statusCode).toBe(200);
      expect(response).toBe("Yes!");
    });
});

// describe('GET /entries/users/:userId/:date', () => {
//     it('Should return entries by user id', async () => {
//       const fetchResponse = await request(app).get("/entries/users/10/");
//       const response = fetchResponse.body[0]["description"];
//       expect(fetchResponse.statusCode).toBe(200);
//       expect(response).toBe("Yes!");
//     });
// });

