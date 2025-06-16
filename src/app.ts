import express from "express";
import routes from './routes/routes';
import cors from "cors";
import { prisma } from './config/prisma';

function createApp() {
  const app = express();
  app.use(express.json());

  /*app.use(express.json()); 
  app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany({ include: { posts: true } });
    res.json(users);
  });*/

  app.post("/users", async (req, res) => {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(user);
  });

  app.use('/api', routes);

  const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  };

  app.use(cors(corsOptions));

  return app;
}

export default createApp;
