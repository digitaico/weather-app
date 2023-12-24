import express, { Application, Request, Response } from "express";

const weatherApp: Application = express();

weatherApp.get("/", (req: Request, res: Response) => {
  console.log("landing page");
  res.send("Bienvenido a Weather App - Ztm jea");
});
export { weatherApp };
