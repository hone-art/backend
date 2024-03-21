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
  const randomEntries: any[] = [];

  for (const user of inspiringUsers) {
    const projects = await projectsModel.getByUserId(user.id);

    if (projects.length > 0) {
      for (const project of projects) {
        const isPicked = Math.floor(Math.random() * 2);

        if (isPicked === 1) {
          const entries = await entriesModel.getByProjectId(project.id);

          if (entries.length > 0) {
            const randomIndex = Math.floor(Math.random() * entries.length);
            const randomEntry = entries[randomIndex];
            (randomEntry.img_id !== null) ? randomEntries.push(randomEntry) : null;
          }
        }
      }
    }
  }

  for (const randomEntry of randomEntries) {
    const user = await usersModel.getById(randomEntry.user_id);
    randomEntry["user_name"] = user!.user_name;

    const profilePicture = await imagesModel.getById(user!.img_id!);
    randomEntry["profile_picture"] = profilePicture!.url;
  }
  if (randomEntries.length <= limit) return randomEntries;

  const shuffled = randomEntries.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, limit);
  return selected;
}