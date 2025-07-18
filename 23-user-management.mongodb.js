/**
 * User Management in MongoDB
 * To manage user access and permissions, you can use roles and permissions.
 * createUser => create user
 * dropUser => delete user
 * getUsers => list users
 * updateUser => update user
 * changeUserPassword => update user password
 */

// cases

// swith to admin database
// use admin;

// connect to mongodb server with this uri
//  "mongodb://example1:example1password@localhost:27017/test?authSource=admin"
db.createUser({
  user: "example1",
  pwd: "example1password",
  roles: [
    {
      role: "read",
      db: "test",
    },
  ],
});

// "mongodb://example2:example2password@localhost:27017/test?authSource=admin"
db.createUser({
  user: "example2",
  pwd: "example2password",
  roles: [
    {
      role: "readWrite",
      db: "test",
    },
  ],
});

// "mongodb://example3:example3password@localhost:27017/test?authSource=admin"
db.createUser({
  user: "example3",
  pwd: "example3password",
  roles: [
    {
      role: "readWrite",
      db: "test",
    },
  ],
});

// only read the samples data
db.samples.find();

// example write data for example2
db.createCollection("samples");
db.samples.insertOne({
  _id: 1,
  name: "sample 1",
});

// list users
db.getUsers();

db.changeUserPassword("example1", "secreat");
// now to connect with new password
// "mongodb://example1:secreat@localhost:27017/test?authSource=admin"

// update user
db.updateUser("example2", {
  roles: [
    {
      role: "readWrite",
      db: "test",
    },
    {
      role: "readWrite",
      db: "learn",
    },
  ],
});

// delete user

db.dropUser("example3");
