import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface User {
  user_name: string,
  uuid: string,
  img_id?: number,
  display_name?: string;
}

const usersModel = {
  getByUuid: async function (uuid: string) {
    const user = await prisma.user.findUnique({
      where: {
        uuid: uuid,
      },
    });
    return user;
  },

  getByUsername: async function (user_name: string) {
    const user = await prisma.user.findUnique({
      where: {
        user_name: user_name,
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