import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class CustomError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: any
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  public sendResponse(res: Response) {
    return res.status(this.statusCode).json({
      success: false,
      name: this.name,
      message: this.message,
      ...(this.details && { details: this.details }),
      ...(process.env.NODE_ENV === 'development' && { stack: this.stack }),
    });
  }
}



// class CustomError extends Error {
//   public statusCode: number;
//   constructor(statusCode: number, message: string, stack = '') {
//     super(message);
//     this.statusCode = statusCode;
//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

// export default CustomError;





// // import { Response } from "express";
// // import { StatusCodes } from 'http-status-codes';



// // // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //  const handleCastError =( err: any, res: Response)=>{
// //     res.status(StatusCodes.BAD_REQUEST).json({
// //         status : false,
// //         message : err.message,
// //         error : err
// //     })
// // }
// // export default handleCastError;