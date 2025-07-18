db.collectionName.deleteOne(query);
db.collectionName.deleteMany(query);

// cases

db.customers.insertOne({
  _id: "spammers",
  full_name: "Spammers",
});

db.customers.deleteOne({ _id: "spammers" });

db.customers.insertMany([
  { _id: "spammers1", full_name: "Spammers 1" },
  { _id: "spammers2", full_name: "Spammers 2" },
  { _id: "spammers3", full_name: "Spammers 3" },
]);

db.customers.deleteMany({
  _id: {
    $regex: /^spammers/,
  },
});
