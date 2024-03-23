import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type Project = {
  title: string | null;
  description: string | null;
  img_id: number | null;
  user_id: number;
  updated_date: Date;
  isCommentsOn: boolean;
  isPublic: boolean;
}

const projectsModel = {
  getById: async function (id: number) {
    const project = await prisma.project.findUnique({
      where: { id: id, },
    });

    return project;
  },

  create: async function (project: Project) {
    const newProject = await prisma.project.create({
      data: project,
    });

    return newProject;
  },

  update: async function (id: number, data: object) {
    const updatedProject = await prisma.project.update({
      where: {
        id: id,
      },
      data: data,
    })

    return updatedProject;
  },

  delete: async function (id: number) {
    // Delete all entries with project id
    const entries = await prisma.entry.findMany({
      where: {
        project_id: id
      }
    });

    for (const entry of entries) {
      const deleteComments = await prisma.comment.deleteMany({
        where: {
          entry_id: entry.id,
        }
      })
    }

    const deleteEntries = await prisma.entry.deleteMany({
      where: {
        project_id: id,
      },
    });

    const deleteProject = await prisma.project.delete({
      where: {
        id: id,
      },
    });
  },

  getByUserId: async function (userId: number) {
    const projects = await prisma.project.findMany({
      where: {
        user_id: userId,
      },
      orderBy: { "updated_date": "desc" }
    });

    return projects;
  },

  getByUserIdAndVisibility: async function (userId: number) {
    const projects = await prisma.project.findMany({
      where: {
        user_id: userId,
        isPublic: true,
      },
      orderBy: { "updated_date": "desc" }
    });

    return projects;
  }

}

export default projectsModel;
