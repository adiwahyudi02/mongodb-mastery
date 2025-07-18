/**
 * Bulk Write Operator in MongoDB
 * Perform multiple write operations in bulk, like insert, update, delete
 * Supported: insertOne, updateOne, updateMany, replaceOne, deleteOne, deleteMany
 */

db.cullectionName.bulkWrite();

// cases

db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "didi",
        full_name: "Didi Diding",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "dudu",
        full_name: "Dudu Dudung",
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["didi", "dudu", "dada"],
        },
      },
      update: {
        $set: {
          full_name: "Dadang Dudung Diding",
        },
      },
    },
  },
]);
