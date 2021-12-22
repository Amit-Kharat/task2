import {Express, Request, Response} from "express";
import { createUserHandler } from "./controller/user.controller";
import validate from "./middlewares/validateRequest";
import validateRequest from "./middlewares/validateRequest";
import { createUserSchema } from "./validationSchemas/user.schema";
export default function  (app: Express){
    app.get("/healthcheck",(req:Request,res:Response)=>{ res.sendStatus(200)});

    // Create User
   app.post("/api/users",validate(createUserSchema),createUserHandler);
}