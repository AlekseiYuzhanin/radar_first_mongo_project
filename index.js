"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();
const url = process.env.DATABASE_CONN;
const mongoClient = new MongoClient(url);
const timeChecking = () => {
    const start = performance.now();
    const end = performance.now();
    return end - start;
};
async function getRandomDocumentsV1(collection, n) {
    const count = await collection.countDocuments();
    const limit = Math.min(n, count);
    return collection.aggregate([{ $sample: { size: limit } }]).toArray();
}
async function getRandomDocumentsV2(collection, n) {
    const count = await collection.countDocuments();
    const limit = Math.min(n, count);
    return collection.find().limit(limit).sort({ name: 1 }).toArray();
}
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db(process.env.DATABASE_NAME);
        const collection = db.collection(process.env.DATABASE_COLLECTION);
        await collection.insertMany([{ name: 'doc1' }, { name: 'doc2' },
            { name: 'doc3' }, { name: 'doc4' }, { name: 'doc5' }]);
        for (let i = 0; i < 11; i++) {
            console.log(await getRandomDocumentsV1(collection, i), `\nВремя выполнения первой функции(Тест : ${i + 1}) : `, timeChecking());
        }
        for (let i = 0; i < 11; i++) {
            console.log(await getRandomDocumentsV2(collection, i), `\nВремя выполнения второй функции(Тест : ${i + 1}) : `, timeChecking());
        }
    }
    catch (err) {
        console.log(err);
    }
    finally {
        await mongoClient.close();
    }
}
run().catch(console.error);
