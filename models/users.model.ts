import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface User {
  user_name: string,
  uuid: string,
}

const usersModel = {
  getById: async function (userId: number) {
    // WRITE CODE TO GET A USER IN DATABASE BY ID
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      return user;
    },

    create: async function (user: User) {
      const newUser = await prisma.user.create({
        data: user,
      });
  
      return newUser;
    },
    
    update: async function (id: number, data: object) {
      const updatedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: data,
      })
      return updatedUser;
    },
  }

export default usersModel;