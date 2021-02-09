
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.get('/', function(req, res) {
    var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/eevee';
    axios.get(pokemonUrl).then( function(apiResponse) {
        var pokemon = apiResponse.data.results;
        res.render('index', {pokemon: pokemon})
    })
})

app.use('/pokemon', require('./routes/pokemon'));

var server = app.listen(port, function() {
  console.log('...listening on', port );
});

module.exports = server;