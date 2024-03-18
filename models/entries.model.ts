import { Prisma, PrismaClient } from '@prisma/client'
import { getDaysInMonth } from '../utils/getDaysInMonth'
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
      orderBy: { "created_date": "desc" }
    });
    return entries;
  },

  getByUserIdAndDate: async function (userId: number, dateStr: string) {
    // console.log(dateStr);
    const startTimeLocal = new Date(dateStr);
    // console.log("start time in Local--------------", startTimeLocal);

    const startTimeUTC = new Date(startTimeLocal);
    startTimeUTC.setHours(startTimeLocal.getHours() -9);
    // console.log("start time in UTC==============", startTimeUTC);

    const endTimeUTC = new Date(startTimeUTC);
    endTimeUTC.setDate(startTimeUTC.getDate() + 1);
    // console.log("end time in UTC==============", endTimeUTC);


    const entries = await prisma.entry.findMany({
      where: {
        user_id: userId,
        // created_date: date
        created_date: {
          gte: startTimeUTC,
          lt: endTimeUTC,
        },
      },
      orderBy: { 'created_date': "desc" }
    });
    return entries;
  },

  getByUserIdAndMonth: async function(userId: number, monthStr: string) {
    // console.log(monthStr);
    const numberOfDays = getDaysInMonth(monthStr);

    const startTimeLocal = new Date(monthStr);
    // console.log("start time in Local--------------",startTimeLocal);

    const startTimeUTC = new Date(startTimeLocal);
    startTimeUTC.setHours(startTimeLocal.getHours() -9);
    // console.log("start time in UTC==============", startTimeUTC);

    const endTimeUTC = new Date(startTimeUTC);
    endTimeUTC.setDate(startTimeUTC.getDate() + numberOfDays);
    // console.log("end time in UTC==============", endTimeUTC);

    const entries = await prisma.entry.findMany({
      where: {
        user_id: userId,
        // created_date: date
        created_date: {
          gte: startTimeUTC,
          lt: endTimeUTC,
        },
      },
      orderBy: { 'created_date': "asc" }
    });

    return entries;
  }
}

export default entriesModel;