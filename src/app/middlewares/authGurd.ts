import { NextFunction, Request, Response } from "express"
import catchAsync from "../Utils/catchAsync"
import jwt, { JwtPayload } from "jsonwebtoken"
import{User} from "../Modules/User/User.model"

const authGurd = (...requiredRoles: string[]) => {
    return catchAsync(async (req:Request, res:Response, next:NextFunction)=>{
        const token = req.headers.authorization 
       console.log(token)
        if(!token){
            throw new Error('you are not authorized')
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload

        const {email,role} = decoded



        const user = await User.findOne({email})

        if(!user){
            throw new Error('user not found')
        }


        if(requiredRoles && !requiredRoles.includes(role)){
            throw new Error('you are not authorized')
        }


        req.user = decoded
        next()


    })
}


export default authGurd