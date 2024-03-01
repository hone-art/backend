import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const projectsModel = {
  getById: async function () {
    // WRITE CODE TO GET A PROJECT IN DATABASE BY ID
  },

  create: async function () {
    // WRITE CODE TO CREATE NEW PROJECT IN DATABASE
  },

  update: async function () {
    // WRITE CODE TO UPDATE AN PROJECT IN DATABASE BY ID
  },

  delete: async function () {
    // WRITE CODE TO DELETE AN PROJECT IN DATABASE BY ID
  },

  getByUserId: async function () {
    // WRITE CODE TO GET PROJECTS IN THE DATABASE BY USER ID
  }

}

export default projectsModel;