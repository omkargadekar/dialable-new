import mongoose from "mongoose";
require("dotenv").config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("could not connect to mongodb",err);
    });
};


export default connectDB;
