import { MongoClient } from "mongodb";
import { orders } from "./orders.js";
import { ex1Router } from "./exercise-1.js";
import { ex2Router } from "./exercise-2.js";
import { ex3Router } from "./exercise-3.js";
import { ex4Router } from "./exercise-4.js";
import { ex5Router } from "./exercise-5.js";
import { ex6Router } from "./exercise-6.js";

const connectionString = "mongodb://127.0.0.1:27017";

console.log("------- Start connecting to MongDB -------");
export const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

await client.connect();
console.log("------- Connecting to MongoDB Successfully -------");

export const db = await client.db("practice-mongo");
console.log("------- Create database successfully -------");

try {
  await db.createCollection("pizzaOrders");
  console.log("------- Create collection successfully -------");
} catch {
  console.log("Collection already exists !");
}

const collection = db.collection("pizzaOrders");

await collection.insertMany(
  orders.map((order) => {
    return {
      ...order,
      created_at: new Date(order.created_at),
    };
  })
);

console.log("------- Insert documents successfully -------");

app.use("/ex1", ex1Router);
app.use("/ex2", ex2Router);
app.use("/ex3", ex3Router);
app.use("/ex4", ex4Router);
app.use("/ex5", ex5Router);
app.use("/ex6", ex6Router);

// await client.close();
