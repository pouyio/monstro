import express from "express";
import path from "path";
import fs from "fs";
import { getRandom } from "./getRandom";

const app = express();

app.get("/", (_, res) => {
  const { adj, color } = getRandom();
  fs.readFile(
    path.join(__dirname + "/../index.html"),
    "utf8",
    async (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).send();
        return;
      }
      data = data
        .replace(
          "__OG_IMAGE__",
          `https://via.placeholder.com/250x100/${color}/000/?text=${adj}`
        )
        .replace("__OG_ADJ__", adj)
        .replace("__OG_COLOR__", color);

      res.send(data);
    }
  );
});

export default app;
