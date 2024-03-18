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



imagesmockreference.ts

import { PrismaClient } from '@prisma/client';
import imagesModel from '../models/images.model';

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    image: {
      findUnique: jest.fn().mockResolvedValue(undefined),
      create: jest.fn().mockResolvedValue(undefined),
    },
  })),
}));

const mockedPrisma = new PrismaClient();

const mockFindUnique = mockedPrisma.image.findUnique as jest.MockedFunction<typeof mockedPrisma.image.findUnique>;
const mockCreate = mockedPrisma.image.create as jest.MockedFunction<typeof mockedPrisma.image.create>;

describe('imagesModel', () => {
  describe('getById', () => {
    it('should retrieve an image by ID', async () => {
      const image = { id: 1, url: 'https://images.app.goo.gl/cwnnRS9ZJmzbcYgt6' };
      mockFindUnique.mockResolvedValue(image);

      const result = await imagesModel.getById(1);

      expect(result).toEqual(image);
      expect(mockFindUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('create', () => {
    it('should create a new image', async () => {
      const newImage = { id: 1, url: 'https://images.app.goo.gl/cwnnRS9ZJmzbcYgt6' };
      mockCreate.mockResolvedValue(newImage); // Using the properly typed mock

      const result = await imagesModel.create(newImage);

      expect(result).toEqual(newImage);
      expect(mockCreate).toHaveBeenCalledWith({
        data: newImage,
      });
    });
  });
});


// const imagesModel = require('../models/images.model')
// const supertest = require('supertest');
// const app = require('../index');

// const request = supertest(app);

// describe('GET /images/:id', () => {
//   it('should return an image by ID', async () => {
//     const imageId = '1';
//     const response = await request.get(`/image/${imageId}`);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('id', imageId);

//     expect(response.headers['content-type']).toBe('image/jpeg');
//   });

//   // Test for Image not found
//   // Test for Invalid ID format
// });