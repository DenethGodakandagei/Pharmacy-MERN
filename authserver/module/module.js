import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    
        fname: {
          type: String,
          required: true,
        },
        lname: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        accounttype: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
       profile:{type: String}
      
})

export default  mongoose.model('User', UserSchema)  