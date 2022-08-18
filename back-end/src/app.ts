import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/server", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(8000, () => console.log("server http://localhost:8000/server"));
