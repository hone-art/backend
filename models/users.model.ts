import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const usersModel = {
  getById: async function () {
    // WRITE CODE TO GET A USER IN DATABASE BY ID
  },

  create: async function () {
    // WRITE CODE TO CREATE NEW USER IN DATABASE
  },

  update: async function () {
    // WRITE CODE TO UPDATE A USER IN DATABASE BY ID
  }
}

export default usersModel;