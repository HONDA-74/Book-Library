import joi from "joi"


export const signupSchema = joi.object({
    name : joi.string().required(),
    email : joi.string().email().required(),
    password : joi.string().min(6).required(),
    phone : joi.string().required()
}).required() 

export const loginSchema = joi.object({
    email : joi.string().email().required(),
    password : joi.string().min(6).required(),
}).required()