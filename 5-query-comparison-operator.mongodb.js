/**
 * Opertators for Query Comparison in MongoDB
 *
 * $eq => Equal
 * $ne => Not Equal
 * $gt => Greater Than
 * $gte => Greater Than or Equal
 * $lt => Less Than
 * $lte => Less Than or Equal
 * $in => In
 * $nin => Not In
 *
 */

// cases

db.products.insertMany([
  {
    _id: 3,
    name: "Pop Mie Rasa Bakso",
    price: new NumberLong("2500"),
    category: "food",
  },
  {
    _id: 4,
    name: "Samsung Galaxy S9+",
    price: new NumberLong("10000000"),
    category: "handphone",
  },
  {
    _id: 5,
    name: "Acer Precator XXI",
    price: new NumberLong("25000000"),
    category: "laptop",
  },
]);

db.customers.find({
  name: { $eq: "Dada Dadang" },
});

db.products.find({
  price: { $gt: 3000 },
});

db.products.find({
  category: { $in: ["laptop", "handphone"] },
  price: { $gt: 10000000 },
});
