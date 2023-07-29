const mongoose = require("mongoose");

// creating variable for mongoDB url
const mongoURI =
    "mongodb+srv://vvisdomr:CxHYgxEp1AkUBUfz@cluster0.kjhoa47.mongodb.net/?retryWrites=true&w=majority";

// connecting mongoose database to app
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "axolotl_flix",
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log(err));
