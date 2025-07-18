/**
 * Text Indexing in MongoDB
 * Only create onece for each collection
 *
 */

// cases

db.products.createIndex(
  {
    name: "text",
    description: "text",
    tags: "text",
  },
  {
    weight: {
      name: 10,
      description: 5,
      tags: 1,
    },
  }
);

db.products.getIndexes();

// note: $text operator only works on text index
// we don't need to specify the field
db.products.find({
  $text: {
    $search: "mie",
  },
});

// note: seaarch mie OR laptop
db.products.find({
  $text: {
    $search: "mie laptop",
  },
});

// note: seaarch exact "mie sedap"
db.products.find({
  $text: {
    $search: '"mie sedap"',
  },
});

// note: seaarch text with "mie" and not "sedap"
// note: - means not
db.products.find({
  $text: {
    $search: "mie -sedap",
  },
});

// note use explain to see how the query is executed

/**
 * $meta operator
 * to include metadata in the result
 * like textScore
 * to sort the result based on the text score
 *
 * Important: only textScore can be used in free
 */

db.products.find(
  {
    $text: {
      $search: "mie laptop",
    },
  },
  {
    searchScore: { $meta: "textScore" },
  }
);
