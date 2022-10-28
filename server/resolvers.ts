import { ObjectId } from 'mongodb';

// import Ligue from '../Models/ligueModel';
import { getDB } from './db';

export const resolvers = {
  Query: {
    getLigues: async (parent: any, args: any, context: any) => {
      try {
        const db = await getDB();
        const tips = db.collection('ligues').find({}).toArray();

        return tips;
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    addLigue: async (parent: any, args: any, context: any) => {
      try {
        const db = await getDB();
        const { title, description } = args;
        const data = await db.collection('ligues').insertOne({ title, description });

        return {
          _id: data.insertedId
        };
      } catch (error) {
        throw error;
      }
    },
    updateLigue: async (parent: any, args: any, context: any) => {
      try {
        const db = await getDB();
        const { _id, title, description } = args;
        // const data = await db.collection('ligues').insertOne({ title, description, _id });
        const data = await db
          .collection('ligues')
          .updateOne({ _id: new ObjectId(_id) }, { $set: { title, description } });

        return {
          _id: data.modifiedCount
        };
      } catch (error) {
        throw error;
      }
    },
    deleteLigue: async (parent: any, args: any, context: any) => {
      try {
        const db = await getDB();
        const { _id } = args;
        // const data = await db.collection('ligues').insertOne({ title, description, _id });
        const data = await db.collection('ligues').deleteOne({ _id: new ObjectId(_id) });

        return {
          _id: data.deletedCount
        };
      } catch (error) {
        throw error;
      }
    }
  }
};
