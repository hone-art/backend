import usersModel from "../models/users.model";
import projectsModel from "../models/projects.model";
import entriesModel from "../models/entries.model";
import imagesModel from "../models/images.model";

type Entry = {
  id: number;
  description: string | null;
  img_id: number | null;
  project_id: number;
  user_id: number;
  created_date: Date;
}

export async function getRandomInspiringEntries(limit: number) {
  const inspiringUsers = await usersModel.isInspiring();
  let allEntries: any[] = [];

  for (const user of inspiringUsers) {
    const projects = await projectsModel.getByUserId(user.id);

    if (projects.length > 0) {
      for (const project of projects) {
        if (project.isPublic) {
          const entries = await entriesModel.getByProjectId(project.id);
          const hasImages = entries.filter((entry) => entry.img_id !== null);

          allEntries = allEntries.concat(hasImages);
        }
      }
    }
  }

  for (const entry of allEntries) {
    const user = await usersModel.getById(entry.user_id);
    entry["user_name"] = user!.user_name;

    const profilePicture = await imagesModel.getById(user!.img_id!);
    entry["profile_picture"] = profilePicture!.url;

    const entryImage = await imagesModel.getById(entry.img_id);
    entry["entry_img"] = entryImage!.url;
  }

  const shuffledEntries = shuffleArray(allEntries);

  if (shuffledEntries.length <= limit) return shuffledEntries;

  const selected = shuffledEntries.slice(0, limit);
  return selected;
}

function shuffleArray(array: any[]) {
  const result = array.slice(0);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}