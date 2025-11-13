import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLList } from "graphql";
import { User } from "../../../db/models/user.model.js";
import { userType } from "../../user/graphQl/user.type.js";
import { Book } from "../../../db/models/book.model.js";

export const BookType = new GraphQLObjectType({
    name: "Book",
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: userType ,
            resolve : async(parent)=>{
            const author = await User.findById(parent.author)
            return author
        }
    },
        availableCopies: { type: GraphQLInt },
        genre: { type: GraphQLString },
        publishedYear :{ type: GraphQLInt }
    }
})

export const borrowBookType= new GraphQLObjectType({
    name: "borrowedBook",
    fields: {
        userId: { type: GraphQLID },
        bookId:{ type: GraphQLID },
        borrowedAt :{type :GraphQLString},
        dueDate :{type :GraphQLString},
        returned :{type :GraphQLBoolean}
    }
})

export const libraryType = new GraphQLObjectType({
    name: "library",
    fields: {
        id : {type : GraphQLID},
        name : {type :GraphQLString},
        location : {type : GraphQLString},
        books : {type : new GraphQLList (BookType) , resolve : async(parent)=>{
            return await Book.find({ _id: { $in: parent.books } })
        }}
    }
})