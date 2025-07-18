/**
 * Restore in MongoDB
 *
 * mongorestore => restore database from backup mongodump
 * mongoimport => restore database from backup mongoexport
 */

// mongorestore example
// ./bin/mongorestore --uri="mongodb://user:password@localhost:27017/database?authSource=admin" --dir="backup-dump/database_name_folder"

// mongoimport example
// ./bin/mongoimport --uri="mongodb://user:password@localhost:27017/database?authSource=admin" --collection="collection_name" --file="backup-export/collection_name.json"
