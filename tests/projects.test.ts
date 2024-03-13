import request from 'supertest'
import app from '../index'
//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()
//let newImage;
beforeAll(async() => {
 
});

afterAll(async() => {

});

describe('GET /projects/:id', () => {
  test('Should return projects by id', async () => {
    const fetchResponse = await request(app).get("/projects/2");
    const response = fetchResponse.body;
    expect(fetchResponse.statusCode).toBe(200);
    expect(response.title).toStrictEqual("Capybara");
  });
});
