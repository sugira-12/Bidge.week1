// mongodb connection
const {MongoClient} = require('mongodb');
const MONGO_URI = 'mongodb+srv://root:sugira12007@librarydb.toyorka.mongodb.net/?appName=libraryDB';
const DB_NAME = 'libraryDB';

let db;
let client;
async function connectToMongoDB() {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log('Connected to MongoDB');
}
function getDB() {
    if (!db) {
        throw new Error('Not connected to MongoDB');
    }
    return db;
}