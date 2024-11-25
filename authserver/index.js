import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { PORT, mongoDBURL } from "./config.js";
import router from "./routes/routes.js";


const app = express();
app.use(cors());
app.use(express.json());

//create route
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send(`welcome`);
});
app.use('/auth',router);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to authentication database");
    app.listen(PORT, () => {
      console.log(`App running : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
