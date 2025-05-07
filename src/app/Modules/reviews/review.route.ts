import express from "express";
import { reviewControllers } from "./review.controller";

const router = express.Router();

router.post("/create-review",reviewControllers.createReview); // Add review
router.get("/", reviewControllers.getAllReview); // Get all reviews for a tutor
router.get("/:bookId", reviewControllers.getReview); // Get all reviews for a tutor
router.patch('/like/:reviewId', reviewControllers.likeReview);
router.patch('/disLike/:reviewId', reviewControllers.dislikeReview);
export const ReviewRoutes = router;