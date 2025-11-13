import { GraphQLString } from "graphql";
import { login, signup } from "./auth.service.js";
import { loginResponseType, signupResponseType } from "./auth.response.js";


export const authMutation = {
    signup: {
        type: signupResponseType,
        args: {
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString },
            phone: { type: GraphQLString }
        },
        resolve: signup
    },

    login: {
        type: loginResponseType,
        args: {
            email: { type: GraphQLString },
            password: { type: GraphQLString }
        },
        resolve: login
    }
}
