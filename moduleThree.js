var Random = require('random-js');
var random = new Random(Random.engines.mt19937().autoSeed());
var formatUSD = require('format-usd');

function numberConverter (){
    var number = (random.integer(100,1000000));
    var dollars = formatUSD( { amount: number} );
    // console.log(dollars);
    return dollars;
}
numberConverter();

function accountBalance () {
    return ('Account balance:');
}

module.exports = {
    numberConverter: numberConverter(),
    accountBalance: accountBalance()
}