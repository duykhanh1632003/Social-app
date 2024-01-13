const mongoose = require("mongoose");

let isConnected = false; //Check connect status


export const connectToDB = async () => {
  mongoose.set("strickQuery", true);
  if (isConnected) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "vibeZone",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};
