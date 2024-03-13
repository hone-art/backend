import request from 'supertest'
import supertest from 'supertest'
import app from './index'
//import { PrismaClient } from '@prisma/client'
import { createServer } from 'http'
// prisma = new PrismaClient()

describe("GET /projects/:id", () => {
    
    it("Should return the project with the given id", () => {
        supertest(createServer())
      .get("/projects/1")
      .expect(200)
      .then((res) => {
        expect(res.body.id).toEqual("1");
        });
      });
    });

    test("Should get user", async() => {
        const user = await request(app).get("/projects/1")

        console.log(user.body)
    }) 






// beforeAll(async() => {
//   await prisma.image.create({
//     id: 3,
//     url: "abc.com",
//     User: "Chad",
//     Project: ["hi"],
//     Entry: ["hello"]
// })
// })
// afterAll(async() => {
// describe('GET /projects', () => {
//   test('Should return all the projects', async () => {
//     const response = await request(app).get('/projects')
//     expect(response.statusCode).toBe(200)
//     expect(await prisma.project.findFirst({
//       where: {
//         id: 1
//       }
//     }))
//   })
// })
// })