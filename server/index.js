import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT ,mongoDBURL } from "./config.js";
import medicinerouter from "../server/routes/medicineroute.js";



const app = express();

app.use(express.json());

app.use(cors());
//create route
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send(`welcome`);
});


app.use('/medicine',medicinerouter);



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`App running : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
