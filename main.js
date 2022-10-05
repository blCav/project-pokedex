const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set('layout', './layouts/full-width');

const homeController = require('./homeController/homeController');
app.get('/index', homeController.sendIndex);
app.get('/credit', homeController.sendCredit);
app.get('/pokedex', homeController.sendPokedex);

app.get("/", (req, res) => {res.redirect("/search")});
app.get("/search", (req, res) => {res.render("pokedex")});

app.get('/result', (req, res) => {
    let search = req.query.searchBar; 
    let url = `https://pokeapi.co/api/v2/pokemon/${search}`
    axios.get(url)
    .then ((data) => {
        res.render("pokeresult", {searchQuery: search, pokeImg: data.data.sprites.front_default, pokeName: data.data.name, pokeID: data.data.id, pokeType: data.data.types, pokeSpecies: data.data.species.name, pokeAbilities: data.data.abilities, pokeWeight: data.data.weight, pokeHeight: data.data.height, pokeBaseExperience: data.data.base_experience, pokeOrder: data.data.order
        });
    }).catch(error => {
        res.render("error.ejs");
    });
});

const errorController = require('./homeController/errorController');
app.use(errorController.respondWithInternalError);
app.use(errorController.respondNotFound);

const port = 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});