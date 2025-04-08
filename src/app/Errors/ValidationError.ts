import { Response } from "express";

export const handleValidationError =( err: any , res : Response)=>{

    const issues = Object.values(err.error).map((issue : any)=>
       { return {
            path : issue.path,
            message : issue.message
    }})

    res.status(400).json({
        status : false,
        message : err.message,
        issues: issues,
        error : err
    })

    

}