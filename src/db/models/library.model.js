import { Schema, model , Types } from "mongoose"

const librarySchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    books: [{ type: Types.ObjectId, ref: "Book" }],
},
{
    timestamps:true
})

export const Library = model("Library" , librarySchema )