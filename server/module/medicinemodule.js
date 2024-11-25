import mongoose from "mongoose";

const medicinesSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        type:{
            type: String,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
        },
        expireDate:{
            type: Date,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        manufacture:{
            type: String,
            required: true,
        },
        Milligrams :{
            type: String,
            required: true,
        },
        itemImg:{type: String}
        
    },{
        timestamps: true,
    }
)

export const Medicine = mongoose.model('Medicine', medicinesSchema);