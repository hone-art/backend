import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const entriesModel = {
  getById: async function () {
    // WRITE CODE TO GET AN ENTRY IN DATABASE BY ID
  },

  create: async function () {
    // WRITE CODE TO CREATE NEW ENTRY IN DATABASE
  },

  update: async function () {
    // WRITE CODE TO UPDATE AN ENTRY IN DATABASE BY ID
  },

  delete: async function () {
    // WRITE CODE TO DELETE AN ENTRY IN DATABASE BY ID
  },

  getByProjectId: async function () {
    // WRITE CODE TO GET ENTRIES IN THE DATABASE BY ID
  }
}

export default entriesModel;