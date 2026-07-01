const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  const sum = a + b;
  res.json({
    message: "success",
    sum: sum,
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
