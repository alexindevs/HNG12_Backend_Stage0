import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "alexindevs@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/alexindevs/HNG12_Backend_Stage0",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
