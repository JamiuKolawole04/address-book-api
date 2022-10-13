require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const cors = require("cors");

const errorHandler = require("./middleware/errorHanler");
const addressBook = require("./routes/contact");
const notFound = require("./notfound");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

// db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/api/contact", addressBook);

app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "Hooray!...server started successfully",
  });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
