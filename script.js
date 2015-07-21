function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
// inventory, cash on hand, 
function User(cash) {
	this.cash=cash;
	this.inventory = [];
	}
// fruit name, price
var fruits = {apples:0,oranges:0,grapes:0,bananas:0,pears:0};

/*
	do dot set interval
var setInterval = function(){
	// every 15 seconds run change prices
	// javascript
};*/

function buyFruit(fruitDesired){

}

var changePrices = function(){
	for(var i = 0; i<fruits.length; i++){
		fruits[i][2] += upOrDown;
	}
}

var upOrDown = function(){
	//go up or down .50
	if (randomNumber(0,1) > 1){
		return .5;
	} else {
		return -.5;
	}
}

