query = {};
db.collectionName.find(query);

// cases

db.customers.find({ _id: "dada" });
db.customers.find({ name: "Dada Dadang" });

db.products.find({ price: 2000 });
db.orders.find({ "items.product_id": 1 });
