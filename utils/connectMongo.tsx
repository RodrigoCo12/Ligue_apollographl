import mongoose from 'mongoose';

const URI_MONGO: any = process.env.URI_MONGO;

const connectMongo = async () => mongoose.connect(URI_MONGO);

export default connectMongo;
