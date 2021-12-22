import { Request,Response } from "express";
import { sendMail } from "../services/mailer";
import { createUser } from "../services/user.service";

export async function createUserHandler(req:Request,res:Response){
    try {
        const user = await createUser(req.body).then(result=>{
            sendMail(result.email,"Welcome mail for "+ result.name).then(preview=>{
                console.log("Prev Link : "+preview);
                return res.send("User Created and Welcome mail has been sent to "+result.email +"<br> Preview The Email at "+preview);
            })
           
        })
       
    } catch (e:any) {
        return res.send(e.message);
    }
}