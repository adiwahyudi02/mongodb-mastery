/**
 * Update document in MongoDB
 *
 * updateOne => Update a single document
 * updateMany => Update multiple documents
 * replaceOne => Replace a single document
 */

/**
 * updateOne(filter, update, options)
 * updateMany(filter, update, options)
 * replaceOne(filter, replacement, options)
 *
 * filter => The filter to select the document(s) to update
 * update => The update operations to apply
 * replacement => The document to replace the matched document with
 * options => Additional options for the update operation
 */

// cases

// updateOne example
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $set: {
      category: "food",
    },
  }
);

db.products.updateOne(
  {
    _id: 2,
  },
  {
    $set: {
      category: "food",
    },
  }
);

// updateMany example
db.products.updateMany(
  {
    $and: [{ category: "food" }, { tags: { $exists: false } }],
  },
  {
    $set: {
      tags: ["food"],
    },
  }
);

// replaceOne example

// input wrong document
db.products.insertOne({
  _id: 9,
  name: "Wrong product",
  price: 5000,
});

// replace the document with a new one
db.products.replaceOne(
  {
    _id: 9,
  },
  {
    _id: 9,
    name: "Adidas Sepatu Lari Pria",
    category: "shoes",
    price: new NumberLong("1100000"),
    tags: ["adidas", "shoes", "running"],
  }
);
