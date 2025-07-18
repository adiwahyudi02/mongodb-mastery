/**
 * Opertators for Query Logical in MongoDB
 *
 * $and => Logical AND
 * $or => Logical OR
 * $not => Logical NOT
 * $nor => Logical NOR
 */

// cases

// we don't need explicitly add $and
db.products.find({
  category: { $in: ["laptop", "handphone"] },
  price: { $gt: 10000000 },
});

// same as above
db.products.find({
  $and: [
    { category: { $in: ["laptop", "handphone"] } },
    { price: { $gt: 10000000 } },
  ],
});

db.products.find({
  category: {
    $not: { $in: ["laptop", "handphone"] },
  },
});
