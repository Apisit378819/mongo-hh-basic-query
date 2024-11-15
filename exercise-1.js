import { db } from "./app";
import { Router } from "express";
const collection = db.collection("pizzaOrders");
export const ex1Router = Router();

ex1Router.get("/findcherlyn", (req, res) => {
  const result = collection.findOne({ customer_name: "Cherlyn" });
  return res.json({ data: result });
});

ex1Router.get("/findmastercard", (req, res) => {
  const result = collection.find({ credit_card_type: "mastercard" });
  return res.json({ data: result });
});

ex1Router.get("/findmedium", (req, res) => {
  const result = collection.find({ size: "medium" }).limit(5);
  return res.json({ data: result });
});
