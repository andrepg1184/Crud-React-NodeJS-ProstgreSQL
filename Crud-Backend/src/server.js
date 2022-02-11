const express = require("express");
const cors = require("cors");
const { listen } = require("express/lib/application");
const todosRoutes =  require("./todos.routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(todosRoutes);

app.get("/health", (req,res) => { 
    return res.json("up Server");
});

app.listen(3333, () => console.log("Server up in 3333"))