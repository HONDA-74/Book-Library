import { GraphQLString ,GraphQLInt,GraphQLID} from "graphql";
import { BookType, borrowBookType } from "./book.type.js";
import { getAllBooksResponse, getBookByIDResponse, getLibraryResponse, getOverDueResponse } from "./book.response.js";
import { getAllBooks, getBookByID, getLibrary, getOverDueBorowedBooks } from "./book.service.js";




export const bookQuery = {
    getAllBooks : {
        type : getAllBooksResponse,
        resolve : getAllBooks
    },
    getBookByID : {
        type : getBookByIDResponse,
        args : {
            id : {type : GraphQLID}
        },
        resolve : getBookByID
    },
    getLibrary : {
        type : getLibraryResponse ,
        resolve : getLibrary
    },
    getOverDue : {
        type : getOverDueResponse ,
        resolve : getOverDueBorowedBooks
    }
}
