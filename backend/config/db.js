// const mongoose = require("mongoose")
// require("dotenv").config()

// const DBconnection = mongoose.connect(process.env.MongoConnection)

// module.exports = DBconnection

const mongoose = require("mongoose");
require("dotenv").config();

console.log("MONGO_CONNECTION:", process.env.MONGO_CONNECTION);

const DBconnection = mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = DBconnection;
