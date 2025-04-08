import { Request, Response } from "express";
import { BookServices } from "./Book.services";

const createBook = async (req:Request, res:Response) => {
    const payload = req.body;
    const result = await BookServices.createBook(payload);
    res.json({
        message: 'Book created successfully',
        success: true,
        data: result,
    })
}

const getAllBooks= async (req:Request, res:Response) => {
    const result = await BookServices.getAllBooks();
    res.json({
        message: "Books retrieved successfully",
        success: true,
        data: result,
    })
}
const getSingleBook= async (req:Request, res:Response) => {
    const {productId} = req.params;
    const result = await BookServices.getSingleBook(productId);
    res.json({
        message: "Book retrieved successfully",
        success: true,
        data: result,
    })
}
const updateBook= async (req:Request, res:Response) => {
    const {productId} = req.params;
    const payload = req.body;
    const result = await BookServices.updateBook(payload, productId);
    res.json({
        message: "Book updated successfully",
        success: true,
        data: result,
    })
}
const deleteBook= async (req:Request, res:Response) => {
    const {productId} = req.params;
    const result = await BookServices.deleteBook(productId);
    res.json({
        message: "Book deleted successfully",
        success: true,
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