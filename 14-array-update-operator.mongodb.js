/**
 * Array Update Operators in MongoDB
 *
 * $ => Update fisrt element in array based on a query condition
 * $[] => Update all elements in an array based on query condition
 * $[<identifier>] => Update elements in an array based on a query condition with an identifier
 * <index> => Update element at a specific index in an array
 * $addToSet => Add an element to an array only if it does not already exist
 * $pop => Remove the first or last element from an array
 * $pull => Remove all instances of a value from an array
 * $push => Add an element to the end of an array
 * $pushAll => Add multiple elements to the end of an array
 * $pullAll => Remove multiple elements from an array
 */

// cases

db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

db.products.find();

// Update first element in ratings array
db.products.updateMany(
  {
    ratings: 90,
  },
  {
    $set: {
      "ratings.$": 100,
    },
  }
);

// Update all elements in ratings array
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[]": 100,
    },
  }
);

db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

// Update elements in ratings array based on arrayFilters
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.$[element]": 100,
    },
  },
  {
    arrayFilters: [{ element: { $gte: 80 } }],
  }
);

// Update element at a specific index in ratings array
db.products.updateMany(
  {},
  {
    $set: {
      "ratings.0": 50,
      "ratings.1": 60,
    },
  }
);

// addtoSet example
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $addToSet: {
      tags: "popular",
    },
  }
);

// pop example

db.products.find({ _id: 1 });

// note: 1 means remove last element, -1 means remove first element
db.products.updateOne(
  {
    _id: 1,
  },
  {
    $pop: {
      ratings: -1,
    },
  }
);

db.products.updateOne(
  {
    _id: 2,
  },
  {
    $pop: {
      ratings: 1,
    },
  }
);

// pull example
db.products.updateMany(
  {},
  {
    $set: {
      ratings: [90, 80, 70],
    },
  }
);

db.products.updateMany(
  {},
  {
    $pull: {
      ratings: {
        $gte: 80,
      },
    },
  }
);

// push example
db.products.updateMany(
  {},
  {
    $push: {
      ratings: 100,
    },
  }
);

// pullAll example

db.products.updateMany(
  {},
  {
    $push: {
      ratings: 0,
    },
  }
);

db.products.updateMany(
  {},
  {
    $pullAll: {
      ratings: [100, 0],
    },
  }
);
