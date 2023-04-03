import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Webkhurshid1@@",
  database: "loginsystem",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.post("/create/", (req, res) => {
  const sql = "INSERT INTO users (`name`, `email`, `phone`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.phone];
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    console.log("User is added successfully!");
    return res.json(result);
  });
});

app.get("/detail/:id", (req, res) => {
  const sql = "SELECT * FROM users WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.put("/edit/:id", (req, res) => {
  const sql = "UPDATE users set `name` = ?, `email` = ?, `phone` = ? WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [req.body.name, req.body.email, req.body.phone, id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.delete("/remove/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
