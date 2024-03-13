import request from 'supertest'
import app from '../index'
//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()
//let newImage;
beforeAll(async() => {
 
});

afterAll(async() => {

});

describe('GET /images/:id', () => {
  test('Should return images by id', async () => {
    const fetchResponse = await request(app).get("/images/1");
    const response = fetchResponse.body;
    expect(fetchResponse.statusCode).toBe(200);
    expect(response).toStrictEqual({id:1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"});
  });
});

describe('POST /images/', () => {
  test('Should upload an image successfully', async () => {
    const fetchResponse = await request(app)
    .post("/images")
    .attach('image', `${__dirname}/testImage.jpg`)


    const response = fetchResponse.body;
    expect(fetchResponse.statusCode).toBe(200);
    expect(response).toStrictEqual({id:1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"});
  });
});

