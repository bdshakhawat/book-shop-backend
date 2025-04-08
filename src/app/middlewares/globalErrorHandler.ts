/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"
import { handleCastError } from "../Errors/CustomError"
import { handleDuplicateError } from "../Errors/DuplicateError"
import { handleValidationError } from "../Errors/ValidationError"
import { handleGenericError } from "../Errors/GenericError"



interface IErrorResponse {
    success: boolean,
    name : string,
    message : string,
    error : any,
    code? : number
}

export const globalErrorHandler = (err: IErrorResponse , req: Request, res: Response , next: NextFunction)=>{
    // console.log(err)

    if(err instanceof mongoose.Error.CastError){
        handleCastError(err, res)
    }

    else if ((err as any).code && (err as any).code === 11000) {
        handleDuplicateError(err, res);
    }

    else if( err instanceof mongoose.Error.ValidationError){
        handleValidationError(err,res)
    }

   else if(err instanceof Error){
     handleGenericError(err,res)
   }
     
}  
 