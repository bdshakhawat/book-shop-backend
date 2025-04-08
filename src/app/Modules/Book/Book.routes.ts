import { Router } from "express";
import { BookControllers } from "./Book.controller";

const route = Router();
route.get("/:productId", BookControllers.getSingleBook);
route.get("/:productId", BookControllers.updateBook);
route.get("/:productId", BookControllers.deleteBook);
route.post("/", BookControllers.createBook);
route.get("/", BookControllers.getAllBooks);








