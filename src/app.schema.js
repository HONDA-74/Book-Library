import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { authMutation } from "./modules/auth/graphQl/auth.mutation.js";
import { bookMutation } from "./modules/book/graphQl/book.mutation.js";
import { userMutation } from "./modules/user/graphQl/user.mutation.js";
import { bookQuery } from "./modules/book/graphQl/book.query.js";

const query = new GraphQLObjectType({
    name : "RootQuery" ,
    fields : {
        ...bookQuery
    },
})

const mutation = new GraphQLObjectType({
    name : "RootMutation" ,
    fields : {
        /**
         * signup
         * login
         * add book
         * borrow book
         * delete user
         * mark book available again
         */

        ...authMutation,
        ...bookMutation,
        ...userMutation
    },
})

export const schema = new GraphQLSchema({
    
    query ,
    mutation ,
})