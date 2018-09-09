let express = require("express");
let Pokedex = require("pokedex-promise-v2");
let P = new Pokedex();
let bodyParser = require("body-parser");
let app = express();

let find = function(){

};

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({entended: true}));


app.get('/', function(req, res){
	res.render('index.ejs');
});

// if (query){
// 	res.render("pokemon.ejs");
// }

app.get('/pokemon/:name', function(req, res){
	console.log(req);
	res.render('pokemon.ejs');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));