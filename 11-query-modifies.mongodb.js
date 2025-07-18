/**
 * Query Modifiers in MongoDB
 *
 * count => Count the number of documents
 * limit => Limit the number of documents returned
 * skip => Skip a specified number of documents
 * sort => Sort the documents in the result
 * explain => Explain the query execution plan
 */

// cases

db.products.find().count();

db.products.find().limit(4);

db.products.find().skip(2);

db.products.find().skip(2).limit(4);

// note: 1 means ascending, -1 means descending
db.products.find().sort({ category: 1, name: -1 });
