import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.f7noilt.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
} as any);

export const getDB = async (dbName: string = process.env.DB_NAME!) => {
  await client.connect();
  return client.db(dbName);
};

export const prove = process.env.DB_USERNAME;
