import express from "express";
import { reviewControllers } from "./review.controller";

const router = express.Router();

router.post("/create-review",reviewControllers.createReview); // Add review
router.get("/", reviewControllers.getAllReview); // Get all reviews for a book
router.get("/:bookId", reviewControllers.getReview); // Get all reviews for a book
router.patch('/like/:reviewId', reviewControllers.likeReview);
router.patch('/disLike/:reviewId', reviewControllers.dislikeReview);
export const ReviewRoutes = router;