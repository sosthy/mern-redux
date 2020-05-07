import { connectDB } from "./connect-db";
import initialState from "../app/redux/reducers/initialState";

async function initializeDB() {
  let db = await connectDB();
  for (let collectionName in initialState) {
    let collection = db.collection(collectionName);
    await collection.insertMany(initialState[collectionName]);
  }
}

initializeDB();
