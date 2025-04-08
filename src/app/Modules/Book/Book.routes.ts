import { Router } from "express";
import { BookControllers } from "./Book.controller";

const route = Router();
route.get("/:productId", BookControllers.getSingleBook);
route.patch("/:productId", BookControllers.updateBook);
route.delete("/:productId", BookControllers.deleteBook);
route.post("/", BookControllers.createBook);
route.get("/", BookControllers.getAllBooks);

export const BookRoutes = route;








