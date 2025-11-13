import { roles, User } from "../../../db/models/user.model.js"
import { authenticate } from "../../../graphQl/auth.graphQl.js"
import { isAuthorized } from "../../../graphQl/authorization.graphQl.js"
import { messages } from "../../../utils/index.js"

export const deleteUser = async (_,context) => {
    const {authorization} = context
    let authUser =await authenticate(authorization)
    if(!authUser) throw new Error(messages.user.notFound)
    isAuthorized(roles.USER,authUser.role)

    const deletedUser = User.findByIdAndDelete(authUser._id)

    return { success : true , data : deletedUser }
}