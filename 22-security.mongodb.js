/**
 * Security in MongoDB
 * By default, MongoDB does not enforce authentication.
 * This means that anyone can connect to the database and perform any operation.
 * To secure MongoDB, you need to enable authentication and create users with specific roles.
 */

/**
 * 1. Create an admin user
 * This user will have the ability to create other users and manage the database.
 * This user has the "userAdminAnyDatabase" and "readWriteAnyDatabase" role.
 */

// swith to admin database
// use admin;

// create admin user
db.createUser({
  user: "your_username",
  pwd: "your_password",
  roles: ["userAdminAnyDatabase", "readWriteAnyDatabase"],
});

/**
 * 2. After user admin is created, you need to restart MongoDB with authentication enabled.
 * You can do this by adding the --auth option when starting MongoDB.
 *
 * For example:
 * ./bin/mongod --auth --dbpath=your_data_location
 */

/**
 * 3. Now when you connect to MongoDB server use MongoDB client, you need provide the username and password.
 * for example:
 * ./bin/mongosh "mongodb://username:password@host:port/database?authSource=admin"
 * 
 *
