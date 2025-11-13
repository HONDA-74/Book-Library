import { schema } from "./app.schema.js"
import { connectDB } from "./db/connection.js"
import { createHandler } from "graphql-http/lib/use/express"
const bootstrap = async (app , express) =>{
    await connectDB()
    app.use(express.json())
    app.all("/graphql" , createHandler({ schema , context : (req)=>{
        const {authorization} = req.headers
        return {authorization} 
    }}))


}
export default bootstrap