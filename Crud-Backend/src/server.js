const express = require("express");
const { listen } = require("express/lib/application");
const todosRoutes =  require("./todos.routes");
const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get("/health", (req,res) => { 
    return res.json("up Server");
});

app.listen(3333, () => console.log("Server up in 3333"))