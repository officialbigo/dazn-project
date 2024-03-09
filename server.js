require("dotenv").config();
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const app = express();

connectDb();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use(`/`, require("./routes/movieRoutes"));
app.use(`/admin`, require("./routes/adminRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`this is soo fun , I am in port ${port}`);
});
