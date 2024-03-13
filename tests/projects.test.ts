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
  it('Should return projects by id', async () => {
    const fetchResponse = await request(app).get("/projects/2");
    const response = fetchResponse.body;
    expect(fetchResponse.statusCode).toBe(200);
    expect(response.title).toStrictEqual("Capybara");
  });
});
describe('GET /projects/users/:userid', () => {
    it('Should get projects by user id', async () => {
      const fetchResponse = await request(app).get("/projects/users/10");
      const response = fetchResponse.body[0];
      expect(fetchResponse.statusCode).toBe(200);
      expect(response.title).toBe("Capybara");
    });
  });


  
