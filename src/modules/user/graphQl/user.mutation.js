import { deleteUserResponse } from "./user.response.js";
import { deleteUser } from "./user.service.js";

export const userMutation = {
    deleteUser: {
        type : deleteUserResponse ,
        resolve: deleteUser
    },
}
