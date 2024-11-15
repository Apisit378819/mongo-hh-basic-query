import { Collection } from "mongodb";
import { db } from "./app";
import { Router } from "express";
const collection = db.collection("pizzaOrders");
export const ex3Router = Router();

ex3Router.get("/sortprice", (req, res) => {
  const result = collection.find().sort({ total_price: -1 });

  return res.json({ data: result });
});

ex3Router.get("/sortdate", (req, res) => {
  const result = collection.find().sort({ created_at: 1 });

  return res.json({ data: result });
});
