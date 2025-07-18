/**
 * Backup in MongoDB
 * By default mongodb doesn't provide backup feature
 * You can use database-tolls to backup your database
 *
 * mongodump => backup database in binary format
 * mongoexport => backup database in json/csv format, only works on per collection
 */

// mongodump example
// ./bin/mongodump --uri="mongodb://user:password@localhost:27017/database?authSource=admin" --out="backup-dump"

// mongoexport example
// ./bin/mongoexport --uri="mongodb://user:password@localhost:27017/database?authSource=admin" --collection="collection_name" --out="backup-export/collection_name.json"
