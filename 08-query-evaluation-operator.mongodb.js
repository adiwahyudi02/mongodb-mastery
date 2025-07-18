/**
 * Opertators for Query Evaluation in MongoDB
 *
 * $expr => Evaluate an expression
 * $jsonSchema => Validate against a JSON Schema
 * $mod => Check divisibility
 * $regex => Match a regular expression
 * $text => Perform text search
 * $where => Execute JavaScript expression
 * $geoIntersects => Check if a point intersects with a geometry
 * $geoWithin => Check if a point is within a geometry
 * $near => Find documents near a point
 * $nearSphere => Find documents near a point on a sphere
 * $all => Match all elements in an array
 * $elemMatch => Match elements in an array that satisfy a condition
 * $size => Match arrays of a specific size
 * $bitsAllClear => Check if all bits are clear
 * $bitsAllSet => Check if all bits are set
 * $bitsAnyClear => Check if any bits are clear
 * $bitsAnySet => Check if any bits are set
 */

// cases

db.customers.insertOne({
  _id: "joko",
  name: "joko",
});

// $expr example
// compare _id and name atrributes
db.customers.find({
  $expr: { $eq: ["$_id", "$name"] },
});

// $jsonSchema example
db.products.find({
  $jsonSchema: {
    required: ["name", "category"],
  },
});

db.products.find({
  $jsonSchema: {
    required: ["name"],
    properties: {
      price: {
        type: "number",
      },
      name: {
        type: "string",
      },
    },
  },
});

// $mod example
// select * from products where price % 5 = 0
db.products.find({
  price: { $mod: [5, 0] },
});

db.products.find({
  price: { $mod: [1000000, 0] },
});

// $regex example
// select * from products where name like '%mie%'
db.products.find({
  name: {
    $regex: /mie/,
    $options: "i",
  },
});

// select * from products where name like 'Mie%'
db.products.find({
  name: {
    $regex: /^Mie/,
  },
});

// $where example,
// note: only works with javascript support, in compass doesnt work
db.customers.find({
  $where: function () {
    return this._id == this.name;
  },
});
