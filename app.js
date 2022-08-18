const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./server/routes");
const errorHandler = require("./server/middlewares/errorHandler");
const PORT = process.env.PORT || 4000;

// swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter);
//swagger api use
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); //routes untuk dokumentasi

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
