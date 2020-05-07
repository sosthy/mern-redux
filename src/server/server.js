import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import methodOverride from "method-override";
import globalErrorHandling from "../server/middlewares/globalErrorHandling";
import config from "../server/configs/config";
import logger from "../server/utils/logger";

const app = express();

app.use(
  morgan(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  cors(),
  methodOverride(),
  globalErrorHandling() // set up global error handling
);

app.listen(config.port, (err) => {
  if (err) throw err;
  logger.info(`> Ready on http://localhost:${config.port}`);
});
