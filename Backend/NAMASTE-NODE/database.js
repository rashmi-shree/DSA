const {MongoClient} = require("mongodb");
const URI="mongodb+srv://NamasteNode:NamasteNode@namastenode.oivweuh.mongodb.net/" 
const client = new MongoClient(URI)
const dbName = "HelloWorld"

async function main() {
    await client.connect()
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User")

    const data = {
        "firstname": "Rashmi1",
        "lastname": "S",
        "city": "Mysore",
        "phonenumber": "787787787"
    }

    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    //read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=> client.close());