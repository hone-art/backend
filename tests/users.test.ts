import request from 'supertest'
import app from '../index'
//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()
beforeAll(async() => {
 
});

afterAll(async() => {

});

describe('GET /users/:uuid', () => {
  test('Should return users by uuid', async () => {
    const fetchResponse = await request(app).get("/users/eZ5KBjo0mgYa2tsei8SEIfIT6dv2");
    const response = fetchResponse.body;
    expect(fetchResponse.statusCode).toBe(200);
    expect(response.user_name).toStrictEqual("yurika");
  });
});
