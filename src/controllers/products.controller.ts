import { Request, Response } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../repositorys/products.repository";

export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const img = productData.file ? productData.file.path : undefined;
    productData.price = parseFloat(productData.price);
    productData.status = Boolean(productData.status);
    productData.userId = parseInt(productData.userId);
    const product = await createProduct({ ...productData, img });
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};


export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).send(products);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getIdProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(Number(req.params.id));
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const updateProductId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await updateProduct(Number(id), req.body);
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const product = await deleteProduct(Number(req.params.id));
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};
//
