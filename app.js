const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const { authRouter } = require("./src/routes/api/auth");

const { staticRouter } = require("./src/routes/api/static");

const noticesRouter = require("./src/routes/api/notices");

const petsRouter = require("./src/routes/api/pets");

const { errorHandler } = require("./src/helpers/apiHelpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

// app.use('/avatars', express.static('public/avatars'))
app.use("/api/notices", noticesRouter);
app.use("/api/pets", petsRouter);
app.use("/api/static", staticRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
