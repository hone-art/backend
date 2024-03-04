import express from 'express'
import cors from "cors";

import dotenv from "dotenv"
dotenv.config();

import entries from "./routes/entries";
import images from "./routes/images";
import projects from "./routes/projects";
import users from "./routes/users";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors()); // TO DO: configure cors settings
app.use(express.json());

app.use("/entries", entries);
app.use("/images", images);
app.use("/projects", projects);
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});