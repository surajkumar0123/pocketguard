const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Expense",
    });
    console.log(`Database running on ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
