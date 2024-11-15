import { db } from "./app";
import { Router } from "express";
const collection = db.collection("pizzaOrders");
export const ex7Router = Router();

ex7Router.delete("/order1", (req, res) => {
  collection.deleteMany({ customer_name: "Jack" });
});
