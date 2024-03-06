import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type Project = {
  title: string | null;
  description: string | null;
  img_id: number | null;
  user_id: number;
  updated_date: Date;
}

const projectsModel = {
  getById: async function (id: number) {
    // WRITE CODE TO GET A PROJECT IN DATABASE BY ID
    const project = await prisma.project.findUnique({
      where: { id: id, },
    });

    return project;
  },

  create: async function (project: Project) {
    // WRITE CODE TO CREATE NEW PROJECT IN DATABASE
    const newProject = await prisma.project.create({
      data: project,
    });

    return newProject;
  },

  update: async function (id: number, data: object) {
    // WRITE CODE TO UPDATE AN PROJECT IN DATABASE BY ID
    const updatedProject = await prisma.project.update({
      where: {
        id: id,
      },
      data: data,
    })

    return updatedProject;
  },

  delete: async function (id: number) {
    // WRITE CODE TO DELETE AN PROJECT IN DATABASE BY ID
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
    // WRITE CODE TO GET PROJECTS IN THE DATABASE BY USER ID
    const projects = await prisma.project.findMany({
      where: {
        user_id: userId,
      },
    });

    return projects;
  }

}

export default projectsModel;
