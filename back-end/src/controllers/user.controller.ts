import bcrypt from "bcrypt";
import { userValidation } from "../validation/user.validation";
import { Request, Response, NextFunction } from "express";
import { createUser, getAllUser, getIdUser, userUpdate, deleteUser, getUser  } from "../repositorys/user.repository";

export const create = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        await userValidation.validate(req.body);
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await getAllUser();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e);
    }
}

export const getByIdUser = async (req: Request, res: Response) => {
    try {
        const user = await getIdUser(Number(req.params.id));
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e);
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await userUpdate(Number(id), req.body);
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e);
    }
}

export const removeUser = async (req: Request, res: Response) => {
    try {
        const user = await deleteUser(Number(req.params.id));
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e);
    }
}

export const validateUser = async (req: Request, res: Response) => {
    try {
        await userValidation.validate(req.body);

        const { email, password } = req.body;
        const user = await getUser(email, password); // atualize para incluir a senha
        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado" });
        }

        return res.status(200).send({ message: "Usuário validado com sucesso" });
    } catch (e) {
        return res.status(400).send(e);
    }
};



