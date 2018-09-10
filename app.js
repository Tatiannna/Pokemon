let express = require("express");
let Pokedex = require("pokedex-promise-v2");
let P = new Pokedex();
let bodyParser = require("body-parser");
let app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({entended: true}));

// HOME
app.get('/', function(req, res){	
	res.render('index.ejs');
});

// POKEMON
app.get('/pokemon/', function(req, res){
	var pokemon = req.query.search;
	console.log(pokemon);
	res.render("pokemon.ejs", {name: pokemon});
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));