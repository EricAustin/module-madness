var express = require('express');
var Random = require('random-js');
var random = new Random(Random.engines.mt19937().autoSeed());
var formatUSD = require('format-usd');
var moduleThree = require('./moduleThree');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/moduleMadness',function(req,res){
    res.send(moduleThree.accountBalance + '<br>' + moduleThree.numberConverter);
})

//Module One- Returns Random Number
var number = (random.integer(100,1000000));
// console.log(number);

//Module Two- Convert Dollars
var dollars = formatUSD( { amount: 9000} );
// console.log(dollars);

console.log(moduleThree.accountBalance, moduleThree.numberConverter);

app.listen(port, function(){
    console.log('Running on port', port);
});