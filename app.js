let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let Pokedex = require('pokedex-promise-v2'); 
let P = new Pokedex();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({entended: true}));

// HOME
app.get('/', function(req, res){	
	res.render('index.ejs');
});

// POKEMON
app.get('/pokemon/', function(req, res){
	P.getPokemonByName(req.query.search.toLowerCase(), function(response, error) { 
      if(!error) {
        res.render("pokemon.ejs", {pokemon: response}); 
      } else {
        res.render("pokemon.ejs", {pokemon: "Not Found"});
      }
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));