import mongoose from "mongoose";
import config from "config";

export interface UserDocument extends mongoose.Document{
email: string;
name:string;
createdAt:Date;
updatedAt:Date;
}

const UserSchema = new mongoose.Schema(
    {
        email: {type:String,required:true,unique:true},
        name: {type:String, required:true},
    },
    {
        timestamps: true
    }
);
const User = mongoose.model<UserDocument>("User", UserSchema);
export default User;