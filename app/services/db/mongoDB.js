import { MongoClient } from "mongodb";

let client;
let db;

async function connect() {
  client = await MongoClient.connect(process.env.MONGODB_URI);
  db = client.db(process.env.MONGODB_DB);
}

function getDb() {
  return db;
}

function close() {
  client.close();
}

export default {
  connect,
  getDb,
  close,
};
