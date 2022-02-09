const express = require("express");
const app = express();
const port = 9999;

app.get("/", (_, res) => {
  res.send("");
});
app.listen(port, () => console.log(`listening port ${port}`));
