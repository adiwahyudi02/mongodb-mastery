/**
 * Index Properties in MongoDB
 * Indexes Properties is to add certain abilities to the indexes.
 */

/**
 *  TTL (Time To Live) Indexes
 *  TTL indexes are used to automatically remove documents after a certain period of time. only on date or timestamp fields.
 *  But background removal job runs every 60 seconds, so it may not be immediate.
 */

// cases

db.createCollection("sessions");

db.sessions.createIndex(
  { createdAt: 1 },
  {
    expireAfterSeconds: 10,
  }
);

db.sessions.insertOne({
  _id: 1,
  session: "session1",
  createdAt: new Date(),
});

db.sessions.find();

/**
 * Unique Indexes
 * Unique indexes ensure that the indexed field(s) do not contain duplicate values.
 */

db.customers.find();

// note: sparse is used to ignore null or undefined values
// let's say we have already some data in the collection, but we want to add unique index to email field.
// So all documents doees not have email field will be ignored.
db.customers.createIndex(
  { email: 1 },
  {
    unique: true,
    sparse: true,
  }
);

db.customers.updateOne(
  { _id: "dada" },
  {
    $set: {
      email: "dada@dada.com",
    },
  }
);

// it will throw error if we try to insert duplicate email
db.customers.updateOne(
  { _id: "dudu" },
  {
    $set: {
      email: "dada@dada.com",
    },
  }
);

/**
 * Case Insensitive Indexes
 * Case insensitive indexes are used to perform case-insensitive searches.
 */

// note: collation is used to define the rules for string comparison, such as case sensitivity and accent sensitivity
// 2 means case insensitive, 1 means case sensitive
db.customers.createIndex(
  { full_name: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);
// it will not use index if we do not use collation in query
db.customers.find({
  full_name: "dadang dudung diding",
});

// it wiil use index if we use collation in query
db.customers
  .find({
    full_name: "dadang dudung diding",
  })
  .collation({
    locale: "en",
    strength: 2,
  })
  .explain();

/**
 * Partial Indexes
 * Partial indexes are used to index a subset of documents in a collection based on a filter condition.
 * This can improve performance and reduce storage space.
 */

// price index will work only for products that have stock greater than 0
db.products.createIndex(
  { price: 1 },
  {
    partialFilterExpression: {
      stock: { $gt: 0 },
    },
  }
);

// it won't work because there is no the partial filter for stock setted
db.products.find({
  price: 2500,
});

// it will work because there is the partial filter for stock setted
db.products.find({
  price: 2500,
  stock: { $gt: 0 },
});
