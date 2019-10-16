import express from "express";
// import { example, add } from "./example";
import example from "./example";

const app = express();

app.get("/", (req, res) => res.send(example));
// app.get("/", (req, res) => res.send(add(3,9).toString()));

const port = 8000;

app.listen(port, () => console.log(`Server started: ${port}`))