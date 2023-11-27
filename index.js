import express from "express";

const app = express();

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
