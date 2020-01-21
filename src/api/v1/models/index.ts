import mongoose from "mongoose";

import User from "./User";

const connectDb = () => {
    return mongoose.connect(
      `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}`
    );
};

const models = { User };

export { connectDb };

export default models;
