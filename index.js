import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:4200" }));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

app.use("/api/login", (req, res, next) => {
  //   res.send("hello from index.js");

  const users = [
    {
      username: "Silviu",
      password: "123456",
    },
    {
      username: "Diogo",
      password: "010101",
    },
  ];
  return res.status(200).json({
    message: "User fetched succesfully!",
    users: users,
  });
});

export default app;
