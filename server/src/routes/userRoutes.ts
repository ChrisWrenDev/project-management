import { Router } from "express";

import { getUser, getUsers, postUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);

export default router;
