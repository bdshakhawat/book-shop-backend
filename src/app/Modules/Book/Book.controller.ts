import { Request, Response } from "express";
import { BookServices } from "./Book.services";
import sendResponse from "../../Utils/sendResponse";
import httpStatus from "http-status";

const createBook =  async (req:Request, res:Response) => {
    const payload = req.body;
    const result = await BookServices.createBook(payload);
    sendResponse(res ,{
        statusCode: httpStatus.OK,
        message: 'Book created successfully',
        suscess: true,
        data: result,
    })
}

const getAllBooks= async (req:Request, res:Response) => {
    const result = await BookServices.getAllBooks();
    sendResponse(res ,{
        statusCode: httpStatus.OK,
        message: "Books retrieved successfully",
        suscess: true,
        data: result,
    })  
}

const getSingleBook= async (req:Request, res:Response) => {
    const {productId} = req.params;
    const result = await BookServices.getSingleBook(productId);
    sendResponse(res ,{
        statusCode: httpStatus.OK,
        message: "Book retrieved successfully",
        suscess: true,
        data: result,
    })
}

const updateBook= async (req:Request, res:Response) => {
    const {productId} = req.params;
    const payload = req.body;
    const result = await BookServices.updateBook(payload, productId);
    sendResponse(res ,{
        statusCode: httpStatus.OK,
        message: "Books updated successfully",
        suscess: true,
        data: result,
    })
}

const deleteBook= async (req:Request, res:Response) => {
    const {productId} = req.params;
    const result = await BookServices.deleteBook(productId);
    sendResponse(res ,{
        statusCode: httpStatus.OK,
        message: "Books deleted successfully",
        suscess: true,
        data: result,
    })
}

export const BookControllers = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
}