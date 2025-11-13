import { Schema, model , Types } from "mongoose"

const borrowedBookSchema = new Schema({
    userId: { type: Types.ObjectId, ref: "User", required: true },
    bookId: { type: Types.ObjectId, ref: "Book", required: true },
    borrowedAt: { type: Date, default: Date.now, required: true },
    dueDate: { type: Date, required: true },
    returned: { type: Boolean, default: false },
},
{
    timestamps:true
})


export const BorrowedBook = model("BorrowedBook" , borrowedBookSchema )