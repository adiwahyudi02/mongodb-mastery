db.collectionName(query, projection);

// cases
// note: _id is always included in the result
// 1: take
// 0: skip

db.products.find({}, { name: 1, category: 1 });
db.products.find({}, { tags: 0, price: 0 });

/**
 * Projection Operators in MongoDB
 *
 * $ => limit array to a fist single element
 * $elemMatch => Match elements in an array
 * $slice => Limit the number of elements in an array
 * $meta => Include metadata in the result
 * $include => Include specific fields in the result
 * $exclude => Exclude specific fields from the result
 * $unset => Remove fields from the result
 * $addFields => Add new fields to the result
 * $set => Set the value of a field
 * $unset => Remove a field from the result
 * $rename => Rename a field in the result
 * $project => Reshape the document
 * $replaceRoot => Replace the root document with a specified document
 * $replaceWith => Replace the document with a specified document
 * $out => Write the result to a collection
 * $merge => Merge the result with an existing collection
 * $count => Count the number of documents in the result
 * $group => Group documents by a specified field
 * $sort => Sort the documents in the result
 * $limit => Limit the number of documents in the result
 * $skip => Skip a specified number of documents in the result
 * $unwind => Deconstruct an array field from the input documents to output a document for
 * each element in the array
 * $lookup => Perform a left outer join to an unsharded collection in the same database
 * $graphLookup => Perform a recursive search on a collection
 * $facet => Process multiple aggregation pipelines within a single stage on the same set of input documents
 * $bucket => Group documents into buckets based on a specified field
 * $bucketAuto => Automatically group documents into buckets based on a specified field
 * $collStats => Return statistics about a collection
 * $listLocalSessions => List all local sessions
 * $listSessions => List all sessions in the cluster
 * $listIndexes => List all indexes on a collection
 * $listCollections => List all collections in a database
 * $listDatabases => List all databases in the cluster
 * $listCommands => List all commands available in the cluster
 * $listRoles => List all roles in the cluster
 * $listUsers => List all users in the cluster
 * $listServerStatus => List server status information
 * $listShardKeys => List all shard keys in the cluster
 * $listShards => List all shards in the cluster
 * $listReplicaSets => List all replica sets in the cluster
 * $listClusterTime => List the cluster time
 */

// $elementMatch example
db.products.find(
  {},
  {
    name: 1,
    tags: {
      $elemMatch: { $in: ["samsung", "logitech", "accessories"] },
    },
  }
);

// $slice example
db.products.find(
  {
    tags: {
      $exists: true,
    },
  },
  {
    name: 1,
    "tags.$": 1,
  }
);

db.products.find(
  {
    tags: {
      $exists: true,
    },
  },
  {
    name: 1,
    tags: {
      $slice: 2, // take first 2 elements
    },
  }
);
