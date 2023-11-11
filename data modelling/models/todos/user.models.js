import mongoose from "mongoose";

const useSchema=new mongoose.Schema({
    usename:{
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps:true})

export const User=mongoose.model("User",useSchema)