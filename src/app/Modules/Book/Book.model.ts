
import mongoose from 'mongoose';
import { TBook } from './Book.interface';

const bookSchema = new mongoose.Schema<TBook>({
    title: {
        type:String,
        required:[true, 'Title is required'],
    },
    author: {
        type:String,
        required:[true, 'Author is required'],
    },
    price: {
        type:Number,
        required:[true, 'price is required'],
    },
    description: {
        type:String,
        required:[true, 'description is required'],
    },
    category: {
        type:String,
        enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
        required:[true, 'category is required'], 
    },
    quantity: {
        type:Number,
        required:[true, 'quantity is required'],
    },
    inStock: {
        type:Boolean,
        default:true,
    },
},
{
    timestamps:true,
})

export const Book = mongoose.model<TBook>('Book', bookSchema);