import joi from "joi";
import { generalFields } from "../../../graphQl/validation.graphQl.js";

export const addBookSchema = joi.object({
    title: joi.string().required(),
    author: joi.string().required(),
    publishedYear: joi.number().required(),
    genre: joi.string().required(),
    availableCopies: joi.number().required(),
}).required()

export const borrowBookSchema = joi.object({
    id : generalFields.id.required()
}).required()