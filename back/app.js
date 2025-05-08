const express =require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const PORT = 3000;

app.use(cors());



app.get("/characters", async(req, res) =>{
    const url = `https://rickandmortyapi.com/api/character`;

    try{
        const response = await axios.get(url);
        const characters = response.data;

        res.json(characters);
    }catch{
        res.status(404).json({error:"personaje no encontrado"});
    };
});



app.get("/characters/:name", async(req, res) =>{
    const nombre = req.params.name;
    const url = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(nombre)}`;

    try{
        const response = await axios.get(url);
        const {name, species, image}= response.data.results[0];

        res.json({name, species, image});
    }catch{
        res.status(404).json({error:"personaje no encontrado"});
    };
});


app.listen(3000, () =>{
    console.log(`server listenign port ${PORT}`);
})