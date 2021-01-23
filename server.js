const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
  },
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error"));
db.once("open", function() {
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:` + PORT);
});
