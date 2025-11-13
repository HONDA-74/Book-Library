import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";
import { userType } from "./user.type.js";

export const deleteUserResponse =new GraphQLObjectType({
    name : "deleteUserResponse",
    fields:{
        success : {type : GraphQLBoolean},
        message : {type : GraphQLString},
        data : {type : userType}
    }
})