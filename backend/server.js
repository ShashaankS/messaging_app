import express from "express";
import {} from "dotenv/config";
import posts from "./routes/posts.js";
import logger from './middleware/logger.js';
import errorHandler from "./middleware/error.js";
import connectDB from './config/db.js'

const app = express();
connectDB();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.send({ message: "Shashaank" });
});

app.use("/api/posts", posts);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
);
