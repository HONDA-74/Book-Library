import { User } from "../../../db/models/user.model.js";
import { validation } from "../../../graphQl/validation.graphQl.js";
import { compareHash, encryptPhone, hash } from "../../../utils/hash/index.js";
import { signupSchema, loginSchema } from "./auth.validation.js";
import { messages } from "../../../utils/index.js";
import { generateToken } from "../../../utils/index.js";


export const signup = async (_, args) => {
            validation(signupSchema, args)
            const { name, email, password, phone } = args

            const hashedPassword = await hash({ password })
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                phone: encryptPhone(phone)
            });
            await newUser.save()
            return { success: true, message: messages.user.Created }
}


export const login = async ( _ , args) => {
    validation(loginSchema, args)
    const { email, password } = args

    const user = await User.findOne({ email })
    if (!user) {
        throw new Error(messages.user.notFound)
    }

    const isMatch = await compareHash({password,hashedPassword: user.password})
    if (!isMatch) {
        throw new Error(messages.user.notFound)
    }

    const token = generateToken({
        payload: { userId: user._id, email: user.email },
        option: { expiresIn: '1y' }
    })

    return { success: true,message :"login successfully" , token }
}
