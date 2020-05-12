const express = require('express');
const app = express();

const data = require("./data.json");

app.use(express.json());

app.get("/clients", (req, res) => {
   res.json(data);
});

app.get("/clients/:id", (req, res) => {
   const { id } = req.params;
   const client = data.find(cli => cli.id == id);

   if(!client) return res.status(204).json();

   res.json(client);
});

app.post("/clients", (req, res) => {});
app.put("/clients/:id", (req, res) => {});
app.delete("/clients/:id", (req, res) => {});

app.listen(3333, () => {
   console.log('Server is running');
})