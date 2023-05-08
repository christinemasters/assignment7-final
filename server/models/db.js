const { default: mongoose } = require("mongoose");

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI).then(() => {
  console.log("Connected to Mongo Atlas");
});
