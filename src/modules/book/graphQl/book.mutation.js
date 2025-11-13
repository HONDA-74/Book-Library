import { GraphQLString ,GraphQLInt,GraphQLID} from "graphql";
import { BookType } from "./book.type.js";
import { addBookResponse, borrowBookResponse, markBookAvailableResponse } from "./book.response.js";
import { addBook, borrowBook, markBookAvailable } from "./book.service.js";




export const bookMutation = {
    addBook: {
        type:addBookResponse ,
        args: {
            title: { type: GraphQLString },
            author: { type: GraphQLString },
            availableCopies: { type: GraphQLInt },
            genre : {type: GraphQLString},
            publishedYear : {type: GraphQLInt}
        },
        resolve: addBook
    },

    borrowBook: {
        type:borrowBookResponse ,
        args: {
            id: { type: GraphQLID }
        },
        resolve: borrowBook
    },

    markBookAvailable: {
        type:markBookAvailableResponse,
        args: {
            id: { type: GraphQLID }
        },
        resolve: markBookAvailable
    }
}
