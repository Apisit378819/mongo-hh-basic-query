import { db } from "./app";
import { Router } from "express";
const collection = db.collection("pizzaOrders");

export const ex4Router = Router();

ex4Router.get("/order1", (req, res) => {
  const result = collection.find({
    quantity: { $lt: 5 },
    credit_card_type: "mastercard",
  });

  return res.json({ data: result });
});

ex4Router.get("/order2", (req, res) => {
  const result = collection.find({
    size: "small",
    $and: [{ quantity: { $gte: 1 } }, { quantity: { $lte: 5 } }],
  }).limit(5);

  return res.json({ data: result });
});

ex4Router.get("/sdsorder3", (req, res) => {
  const result = collection.find({
    quantity: { $gte: 10 },
    credit_card_type: null,
  });

  return res.json({ data: result });
});
