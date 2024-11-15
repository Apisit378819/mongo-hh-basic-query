import { db } from "./app";
import { Router } from "express";
const collection = db.collection("pizzaOrders");
export const ex6Router = Router();

ex6Router.put("/order1", (req, res) => {
  collection.updateMany(
    { customer_name: "Jack" },
    { $set: { isAdmin: false } }
  );
});

ex6Router.put("/order2", (req, res) => {
  collection.updateMany({}, { $set: { country: "Thailand" } });
});

ex6Router.put("/order1", (req, res) => {
  collection.updateOne(
    { customer_name: "M" },
    {
      $set: {
        size: "large",
        total_price: 200000,
        quantity: 20,
        customer_name: "M",
        credit_card_type: "mastercard",
        created_at: "2022-01-01T10:48:40Z",
      },
    },
    {
      upsert: true,
    }
  );
});
