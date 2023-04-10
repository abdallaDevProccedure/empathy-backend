import { Application } from "express";
import { create, getAllUsers, getByIdUser, updateUser, removeUser, validateUser } from "../controllers/user.controller";
import { authenticateJwt } from "../middlewares/authenticateJwt";

const userRoutes = (app: Application) => {
    app.post("/user", create);
    app.post("/user/validate", validateUser);
    app.get("/user", getAllUsers);
    app.get("/user/:id", authenticateJwt, getByIdUser);
    app.put("/user/:id", authenticateJwt, updateUser);
    app.delete("/user/:id", authenticateJwt, removeUser)
};

export default userRoutes;