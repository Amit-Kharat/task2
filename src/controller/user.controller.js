"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserHandler = void 0;
const mailer_1 = require("../services/mailer");
const user_service_1 = require("../services/user.service");
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield (0, user_service_1.createUser)(req.body).then(result => {
                (0, mailer_1.sendMail)(result.email, "Welcome mail for " + result.name).then(preview => {
                    console.log("Prev Link : " + preview);
                    return res.send("User Created and Welcome mail has been sent to " + result.email + "<br> Preview The Email at " + preview);
                });
            });
        }
        catch (e) {
            return res.send(e.message);
        }
    });
}
exports.createUserHandler = createUserHandler;
