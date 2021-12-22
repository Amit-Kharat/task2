"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./controller/user.controller");
const validateRequest_1 = __importDefault(require("./middlewares/validateRequest"));
const user_schema_1 = require("./validationSchemas/user.schema");
function default_1(app) {
    app.get("/healthcheck", (req, res) => { res.sendStatus(200); });
    // Create User
    app.post("/api/users", (0, validateRequest_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
}
exports.default = default_1;
