import { Router } from "express";
import item from "./items";

const routes = Router();

routes.use("/items", item);

export default routes;