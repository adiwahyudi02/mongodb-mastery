db.getCollectionNames();
db.createCollection("newCollection");

db.getCollection("newCollection");
db.newCollection;

db.getCollectionInfos();

db.newCollection.find();
db.newCollection.count();
db.newCollection.drop();
db.newCollection.totalSize();
db.newCollection.stats();

// cases
db.createCollection("products");
db.createCollection("customers");
db.createCollection("orders");
