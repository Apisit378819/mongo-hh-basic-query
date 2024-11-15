db.pizzaOrders.find({}, { total_price: 1 }).sort({ rating: -1 });

db.pizzaOrders.find({}, { created_at: 1 }).sort({ rating: 1 });
