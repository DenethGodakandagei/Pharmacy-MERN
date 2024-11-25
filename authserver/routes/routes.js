import  express from "express";
import  UserSchema  from "../module/module.js";
import bcrypt from 'bcrypt'
import  Jwt  from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, accounttype, password ,profile} = req.body;

    if (!fname || !lname) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!accounttype) {
      return res.json({
        error: "select account type",
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be at least 6 characters long",
      });
    }
    if (!email) {
      return res.json({
        error: "email is required ",
      });
    }
   
   

    const exist = await UserSchema.findOne({ email });
    


    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }
    if (password ) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await UserSchema.create({
        fname,
        lname,
        email,
        accounttype,
        password : hashedPassword,
        profile: profile || "",
      });
  
      return res.json(user);

    }

   
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email });

    if (!user) {
      return res.status(404).send({ error: "Email not found" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.status(400).send({ error: "Password does not match" });
    }

    const token = Jwt.sign({
      userID: user._id,
      email: user.email
    }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).send({
      message: "User login successful",
      email: user.email,
      token
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


  export default router;   