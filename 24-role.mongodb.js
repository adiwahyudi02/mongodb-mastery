/**
 * Role in MongoDB
 * A role is a collection of permissions that a user has in a specific database.
 * A user can have multiple roles in a single database or multiple databases.
 *
 * MongoDB by default provides some built-in roles, you can check on the documenation
 * https://docs.mongodb.com/manual/reference/built-in-roles/
 *
 *
 * You can create your own role by using privilege actions
 * https://docs.mongodb.com/manual/reference/privilege-actions/
 *
 *  getRoles => get roles
 *  createRole => create role
 *  deleteRoles => delete role
 *  updateRole => update role
 */

// create role with customer privilege
// in this case privileges is combined with built-in roles
db.createRole({
  role: "session_management",
  privileges: [
    {
      resource: {
        db: "learn",
        collection: "sessions",
      },
      actions: ["insert"],
    },
  ],
  roles: [
    {
      role: "read",
      db: "learn",
    },
  ],
});

db.getRoles({ showPrivileges: true });

// this user can read all data in learn database
// but only can insert data in sessions collection
db.createUser({
  user: "session_user",
  pwd: "password",
  roles: ["session_management"],
});

// can't insert data in customers collection
db.customers.insertOne({
  _id: "dede",
  full_name: "Dadang Dudung Diding Dedeng",
});

// can insert data in sessions collection
db.sessions.insertOne({
  _id: 1,
  session: "session1",
  createdAt: new Date(),
});

// can't delete data in sessions collection
db.sessions.deleteOne({
  _id: 1,
});

// can't update data in sessions collection
db.sessions.updateOne(
  {
    _id: 1,
  },
  {
    $set: {
      session: "session1 update",
    },
  }
);

db.sessions.find();
