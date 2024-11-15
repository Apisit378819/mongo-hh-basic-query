import { db } from "./app";
import { Router } from "express";
const collection = db.collection("pizzaOrders");

export const ex2Router = Router();
ex2Router.get("/findzoe", (req, res) => {
  const result = collection.findOne(
    { customer_name: "Zoe" },
    { total_price: 1, customer_name: 1 }
  );
  return res.json({ data: result });
});
