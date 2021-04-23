"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const app = express_1.default();
const port = process.env.port || 3001;
app.use(express_1.default.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/users", UserRouter_1.default);
app.listen(port, () => console.log(`Example app is listening on post ${port}!`));
