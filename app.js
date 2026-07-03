import "dotenv/config";
import path from "path";
import morgan from "morgan";
import express from "express";

//imort url errors
import { createServer } from "http";
import { fileURLToPath } from "url";

//imort routes on file
import "./migrate.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import Socket from "./services/Socket.js";

const app = express();

//fileli
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const { PORT } = process.env;

//app sets
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/css", express.static(path.join(__dirname, "public/css")));


//routes
app.use(routes);

//routes error
app.use(errorHandler.notFound);
app.use(errorHandler.errors);

const server = createServer(app);

await Socket.init(server);

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});