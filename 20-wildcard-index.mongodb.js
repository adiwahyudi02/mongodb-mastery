db.customers.createIndex({
  "customFields.$**": 1,
});

db.customers.insertMany([
  {
    _id: "customer1",
    name: "Alice",
    customFields: {
      age: 30,
      city: "New York",
      interests: ["reading", "traveling"],
    },
  },
  {
    _id: "customer2",
    name: "Bob",
    customFields: {
      age: 25,
      city: "Los Angeles",
      interests: ["sports", "music"],
    },
  },
  {
    _id: "customer3",
    name: "Charlie",
    customFields: {
      age: 35,
      city: "Chicago",
      interests: ["cooking", "gaming"],
    },
  },
]);

db.customers
  .find({
    "customFields.age": { $gte: 30 },
  })
  .explain();

db.customers
  .find({
    "customFields.city": "New York",
  })
  .explain();
