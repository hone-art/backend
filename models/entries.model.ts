import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Entry {
  description: string | null;
  img_id: number | null;
  user_id: number;
  project_id: number;
  created_date: Date;
}

const entriesModel = {
  getById: async function (id: number) {
    const entry = await prisma.entry.findUnique({
      where: { id: id, },
    });

    return entry;
  },

  create: async function (entry: Entry) {
    const newEntry = await prisma.entry.create({
      data: entry,
    });

    return newEntry;
  },

  update: async function (id: number, data: object) {
    const updatedEntry = await prisma.entry.update({
      where: {
        id: id,
      },
      data: data,
    });

    return updatedEntry;
  },

  delete: async function (id: number) {
    const deleteEntry = await prisma.entry.delete({
      where: {
        id: id,
      },
    });
  },

  getByProjectId: async function (projectId: number) {
    const entries = await prisma.entry.findMany({
      where: {
        project_id: projectId,
      },
      orderBy: { "created_date": "desc" }
    });

    return entries;
  },

  getByUserId: async function (userId: number) {
    const entries = await prisma.entry.findMany({
      where: {
        user_id: userId,
      },
      orderBy: { "created_date": "desc"}
    });
    return entries;
  }
}

export default entriesModel;