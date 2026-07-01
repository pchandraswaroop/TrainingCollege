// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/users", (req, res) => {
//   res.json({
//     message: "User created successfully!",
//     user: req.body,
//   });
// });
// // curl -X POST http://localhost:3000/users \ -H "Content-Type: application/json" \ -d '{"name":"navya", "age":20}' | jq

// app.get("/users", (req, res) => {
//   res.json({
//     message: "List of users",
//     users: [
//       { id: 1, name: "Alice", age: 25 },
//       { id: 2, name: "Bob", age: 30 },
//     ],
//   });
// });

// app.post("/add", (req, res) => {
//   const { a, b } = req.body;
//   const sum = a + b;
//   res.json({
//     message: "Numbers added successfully!",
//     result: sum,
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });