import { GraphQLObjectType , GraphQLBoolean , GraphQLString} from "graphql"

export const signupResponseType = new GraphQLObjectType({
    name: "signupResponse",
    fields: {
        success: { type: GraphQLBoolean },
        message: { type: GraphQLString },
    }
})

export const loginResponseType = new GraphQLObjectType({
    name: "loginResponse",
    fields: {
        success: { type: GraphQLBoolean },
        message: { type: GraphQLString },
        token: { type: GraphQLString }
    }
})