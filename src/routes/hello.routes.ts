import { Router } from "express";

const helloRouter = Router();

helloRouter.get("/", (req, res) =>{
    res.json({"data": "Server is Live!"});
});

export default helloRouter