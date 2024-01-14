const mongoose = require("mongoose");

let isConnected = false; //Check connect status

export const connectToDB = async () => {
  mongoose.set("strickQuery", true);
  if (isConnected) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://b21dccn453:dellcomk@cluster0.dp1kvjc.mongodb.net/?retryWrites=true&w=majority;",
      {
        dbName: "vibeZone",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};
