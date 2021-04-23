import express from "express";

import UserRouter from "./routes/UserRouter";

const app = express();
const port = process.env.port || 3000;

// Adding middleway to use syntax req.body.name.
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/users", UserRouter);

app.listen(port, () =>
  console.log(`Example app is listening on post ${port}!`)
);
