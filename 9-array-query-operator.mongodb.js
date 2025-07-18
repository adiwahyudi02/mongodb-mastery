/**
 * Opertators for Array Query in MongoDB
 *
 * $all => Match all elements in an array
 * $elemMatch => Match elements in an array that satisfy a condition
 * $size => Match arrays of a specific size
 *
 */

// cases

db.products.insertMany([
  {
    _id: 6,
    name: "Logitech Wireless Mouse",
    price: new NumberLong("175000"),
    category: "laptop",
    tags: ["logitech", "mouse", "accessories"],
  },
  {
    _id: 7,
    name: "Cooler Pad Gaming",
    price: new NumberLong("200000"),
    category: "laptop",
    tags: ["cooler", "laptop", "accessories", "fan"],
  },
  {
    _id: 8,
    name: "Samsung Curved Monitor",
    price: new NumberLong("1750000"),
    category: "computer",
    tags: ["samsung", "monitor", "computer"],
  },
]);

// select * from products where tags = "samsung" and "monitor"
db.products.find({
  tags: { $all: ["samsung", "monitor"] },
});

// select * from products where tags in ("logitech", "samsung")
db.products.find({
  tags: { $elemMatch: { $in: ["samsung", "logitech"] } },
});

// select * from products where tags size = 3
db.products.find({
  tags: { $size: 3 },
});
