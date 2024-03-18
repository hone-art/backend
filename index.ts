import express from 'express'
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { authenticateToken } from './utils/auth';

import dotenv from "dotenv"
dotenv.config();

import entries from "./routes/entries";
import images from "./routes/images";
import projects from "./routes/projects";
import users from "./routes/users";
import comments from "./routes/comments";

const PORT = process.env.PORT || 8080;
const app = express();

const corsOptions: CorsOptions = {
  origin: ["http://localhost:5173", "https://www.hone-art.space"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/entries", entries);
app.use("/images", images);
app.use("/projects", projects);
app.use("/users", users);
app.use("/comments", comments);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/autoLogin", (req, res) => {
  const cookie = req.cookies;

  if (!cookie || cookie == null) {
    return res.status(400).send("Nope");
  }
  else {
    if (cookie.authToken) {
      const user = authenticateToken(req, res);

      return res.status(200).send(user);
    }
  }

  return res.status(400).send("Something went wrong");

});

app.get("/logout", (req, res) => {
  res.cookie('authToken', 'none', {
    expires: new Date(Date.now()),
    httpOnly: true,
  })
  return res.status(200).send("Logged out");

});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default app;