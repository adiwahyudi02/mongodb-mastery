/**
 * Field Update Operators in MongoDB
 *
 * $set => Set the value of a field
 * $unset => Remove a field from the document
 * $rename => Rename a field in the document
 * $inc => Increment the value of a field
 * $currentDate => Set the value of a field to the current date
 */

// cases

// $set example
db.products.updateMany(
  {},
  {
    $set: {
      stock: 0,
    },
  }
);

// $inc example
db.products.updateMany(
  {},
  {
    $inc: {
      stock: 10,
    },
  }
);

// $rename example
db.customers.updateMany(
  {},
  {
    $rename: {
      name: "full_name",
    },
  }
);

// $unset example
db.customers.updateMany(
  {},
  {
    $set: {
      wrong: "wrong value",
    },
  }
);

db.customers.updateMany(
  {},
  {
    $unset: {
      wrong: "",
    },
  }
);

// $currentDate example
db.products.updateMany(
  {},
  {
    $currentDate: {
      lastModifiedDate: {
        $type: "date",
      },
    },
  }
);
