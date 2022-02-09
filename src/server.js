const express = require("express");
const { listen } = require("express/lib/application");

const app = express();

app.use(express.json());

app.get("/health", (req,res) => { 
    return res.json("up");
});

app.listen(3333, () => console.log("Server up in 3333"))