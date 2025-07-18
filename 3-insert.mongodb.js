document = {};
db.collection.insertOne(document);
db.collection.insertMany(document);

//cases

// note: _id is auto-generated if not provided with ObjectId
db.customers.insertOne({
  _id: "dada",
  name: "Dada Dadang",
});

// get all data customers
db.customers.find();

// note: new NumberLong is used for large integers
db.products.insertMany([
  { _id: 1, name: "Indomie Ayam Bawang", price: new NumberLong("2000") },
  { _id: 2, name: "Mie Sedap Soto", price: new NumberLong("2000") },
]);

// note: new ObjectId() is used to generate a unique identifier
// new NumberInt is used for small integers, but not necessary it can be omitted
db.orders.insertOne({
  _id: new ObjectId(),
  total: new NumberLong("8000"),
  items: [
    {
      product_id: 1,
      price: new NumberLong("2000"),
      quantity: new NumberInt("2"),
    },
    {
      product_id: 2,
      price: new NumberLong("2000"),
      quantity: new NumberInt("2"),
    },
  ],
});
