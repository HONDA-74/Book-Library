import { Schema , model , Types} from "mongoose";

export const roles = {
    ADMIN : "admin",
    USER : 'user'
}

const userSchema = new Schema({
    name: { type: String,
                required: [ true , "user name is required"] 
            },
    email: { type: String, unique: [true , "email already exits"],
                required: [true , "email is required"]
            },
    password: { type: String,
                required: [function () {return this.provider=="system"? true : false }  , "password is required "] 
            },
    phone : {type :String , unique: [true , "phone already exits"],
            required: [function ()  {return this.provider=="system"? true : false }  , "phone is required "]
        },
    borrowedBooks: [{ type: Types.ObjectId, ref: "Book" }],
    provider :{type : String , enum : ["google" , "system"] , default : "system"} ,
    role: { 
        type: String, 
        enum: [ roles.USER, roles.ADMIN ], 
        default: roles.USER 
    },
},
{
    timestamps: true,
})

export const User = model("User" , userSchema )

