import { Router } from "express";
import { UserControllers } from "./User.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./User.validation";

const router = Router();

router.post(
  "/create-user",
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser
);
router.get("/get-all-users", UserControllers.getAllUser);



export const UserRoutes = router;
