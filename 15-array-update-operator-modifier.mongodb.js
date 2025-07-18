/**
 * Array Update Operators Modifier in MongoDB
 *
 * $each => Apply an operation to each element in an array, used for $push and $addToSet to add multiple elements
 * $position => Specify the position in the array where the new element should be added, used with $push
 * $slice => Limit the number of elements in an array, used with $push to decide how many elements to keep
 * $sort => Sort the elements in an array, used with $push to sort the elements
 */

// cases

// $each example on $push
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300],
      },
    },
  }
);

// $each example on $addToSet
db.products.updateMany(
  {},
  {
    $addToSet: {
      tags: {
        $each: ["tranding", "popular"],
      },
    },
  }
);

// $position example
db.products.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["hot"],
        $position: 1,
      },
    },
  }
);

// $sort example, add elements in sorted order
// note: -1 means descending order
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $sort: -1,
      },
    },
  }
);

// $slice example
// note: -n means take last n elements
db.products.updateMany(
  {},
  {
    $push: {
      ratings: {
        $each: [100, 200, 300, 400, 500],
        $slice: 10,
        $sort: -1,
      },
    },
  }
);
