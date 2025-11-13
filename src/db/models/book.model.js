import { model , Schema , Types} from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Types.ObjectId, ref: "User", required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    availableCopies: { type: Number, required: true },
},
{
    timestamps : true,
})



export const Book = model("Book" , bookSchema )