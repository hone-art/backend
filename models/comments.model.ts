import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

interface Comment {
    id: number;
    description: string | null;
    user_id: number;
    entry_id: number | null;
  }

const entriesModel = {

  create: async function (comment: Comment) {
    const newComment = await prisma.comment.create({
      data: comment,
    });

    return newComment;
  },


  delete: async function (id: number) {
    const deleteComment = await prisma.comment.delete({
      where: {
        id: id,
      },
    });
  },

  getByEntryId: async function (entryId: number) {
    const comments = await prisma.comment.findMany({
      where: {
        entry_id: entryId,
      },
      orderBy: { "created_date": "desc" }
    });

    return comments;
  },

}

export default commentsModel;