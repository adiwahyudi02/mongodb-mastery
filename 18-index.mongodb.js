db.collectionName.createIndex();
db.collectionName.dropIndex();
db.collectionName.getIndexes();

// cases
// note: _id is indexed by default
db.customers.getIndexes();

// note: 1 means ascending order, -1 means descending order
db.products.createIndex({ category: 1 });

db.products.getIndexes();

db.products.find({
  category: "food",
});

db.products.dropIndex("category_1");

// debuging use explain()

db.products
  .find({
    category: "food",
  })
  .explain();

db.products
  .find({
    category: "food",
  })
  .sort({
    category: 1,
  })
  .explain();

db.products
  .find({
    category: "food",
  })
  .sort({
    category: -1,
  })
  .explain();

db.products
  .find({
    tags: "samsung",
  })
  .explain();

// compound index example

// it will generarte index for combination of (stock), (stock, tags)
db.products.createIndex({ stock: 1, tags: 1 });

db.products.find({
  stock: 10,
  tags: "popular",
});

db.products
  .find({
    stock: 10,
    tags: "popular",
  })
  .explain();

// not using index example
db.products
  .find({
    name: "samsung",
    tags: "popular",
  })
  .explain();

// only stock, it will use index
db.products
  .find({
    stock: 10,
  })
  .explain();

// but not if only tags
db.products
  .find({
    tags: "popular",
  })
  .explain();
