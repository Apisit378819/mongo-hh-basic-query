import { db } from "./app";
import { Router } from "express";
const collection = db.collection("pizzaOrders");
export const ex6Router = Router();

ex6Router.put("/order1", (req, res)=>{
    collection.updateMany()
})