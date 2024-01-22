const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = 3333;

const app = express();

app.get("/api/games", async (req, res) => {
    // read the json file data
   const games = await fs.promises.readFile("./data.json", "utf8");

   // send back json data to client side // dont need to parse
   res.send(games);
});

app.use(express.static("./public"));

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});