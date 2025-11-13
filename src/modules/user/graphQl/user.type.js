import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt } from "graphql";

export const userType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    }
})