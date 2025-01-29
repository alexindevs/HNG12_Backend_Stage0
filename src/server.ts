import { createServer } from "http";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 7000;
const EMAIL = "alexindevs@gmail.com";
const GITHUB_URL = "https://github.com/alexindevs/HNG12_Backend_Stage0";

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const responseData = {
      email: EMAIL,
      current_datetime: new Date().toISOString(),
      github_url: GITHUB_URL,
    };

    res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
