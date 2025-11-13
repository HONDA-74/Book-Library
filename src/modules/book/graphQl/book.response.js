import { GraphQLBoolean, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { BookType, borrowBookType, libraryType } from "./book.type.js"

export const addBookResponse = new GraphQLObjectType({
    name : "addBookResponse",
    fields : {
        success :  { type: GraphQLBoolean },
        data: { type: BookType }
    }
})

export const borrowBookResponse = new GraphQLObjectType({
    name : "borrowBookResponse",
    fields : {
        success :  { type: GraphQLBoolean },
        data: { type: borrowBookType }
    }
})

export const markBookAvailableResponse = new GraphQLObjectType({
    name : "markBookAvailableResponse",
    fields : {
        success :  { type: GraphQLBoolean },
        message : {type :GraphQLString},
        data: { type: borrowBookType }
    }
})

export const getAllBooksResponse = new GraphQLObjectType({
    name : "getAllBooksResponse",
    fields : {
        success :  { type: GraphQLBoolean },
        data: { type:new GraphQLList( BookType ) }
    }
})

export const getBookByIDResponse = new GraphQLObjectType({
    name : "getBookByIDResponse",
    fields : {
        success :  { type: GraphQLBoolean },
        data: { type : BookType  }
    }
})

export const getLibraryResponse = new GraphQLObjectType({
    name : "getLibraryResponse",
    fields : {
        success :  { type: GraphQLBoolean },
        data: { type : new GraphQLList ( libraryType ) }
    }
})

export const getOverDueResponse = new GraphQLObjectType({
    name : "getOverDueResponse",
    fields : {
        success :  { type: GraphQLBoolean },
        data: { type : new GraphQLList ( borrowBookType ) }
    }
})