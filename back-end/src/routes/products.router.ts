import { Application } from "express";
import { createNewProduct, getIdProduct, getProducts, removeProduct, updateProductId } from "../controllers/products.controller";
import uploadProducts from "../middlewares/uploadImage";

const productRoutes = (app: Application) => {
    app.post("/products", uploadProducts.single('img'), createNewProduct);
    app.get("/products", getProducts);
    app.get("/products/:id", getIdProduct);
    app.put("/products/:id", uploadProducts.single('img'), updateProductId);
    app.delete("/products/:id", removeProduct);
};

export default productRoutes;
