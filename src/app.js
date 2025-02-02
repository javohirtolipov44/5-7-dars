import express from "express";
import "dotenv/config";
import connectDB from "./config/database.js";
import Routes from "./routes/routes.js";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/api", Routes());

const bootstrap = async () => {
  try {
    await connectDB();
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log("Server is running:", PORT);
    });
  } catch (error) {}
};

bootstrap();
