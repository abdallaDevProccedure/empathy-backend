import express from "express";
import userRoutes from "./user.router";
import productsRoutes from "./products.router";

const routes = (app: express.Application): void => {
userRoutes(app);
productsRoutes(app);
};

export default routes;