import { Router } from "express";
import { UserControllers } from "./User.controller";

const router = Router();

router.post(
  "/create-user",
//   validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createNewUser
);
// router.get("/get-all-users", UserControllers.RetriveUsers);
// router.patch(
//   "/deactivate-user/:id",
//   UserControllers.deactivateUser
// );
// router.patch(
//   "/activate-user/:id",
//   UserControllers.activateUser
// );

export const UserRoutes = router;
