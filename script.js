$(document).ready(function(){
$("[name='submitButtonApple']").on('click', function() {
			apples.quantity++;
			$(".appleQuantity").html("Apple Quantity: " + apples.quantity);
			});

$("[name='submitButtonOrange']").on('click', function() {
			oranges.quantity++;
			$(".orangeQuantity").html("Orange Quantity: " + oranges.quantity);
			});

$("[name='submitButtonPear']").on('click', function() {
			pears.quantity++;
			$(".pearQuantity").html("Pear Quantity: " + pears.quantity);
			});

$("[name='submitButtonBanana']").on('click', function() {
			bananas.quantity++;
			$(".bananaQuantity").html("Banana Quantity: " + bananas.quantity);
			});



function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function Fruit (name, price, quantity) {
	this.name = name;
	this.price = price;
	this.quantity = 0;
	};	
	

var totalCash = 100;
/*var inventory = [];*/

var price = randomNumber(0.5,9.99);
var currentPrice = priceGenerator();
var totalSpent;

var apples = new Fruit ("apples", price, 0);
var bananas = new Fruit ("bananas", price, 0);
var pears = new Fruit ("pears", price, 0);
var oranges = new Fruit ("oranges", price, 0);
/*var fruits = ["apples", "bananas", "pears", "oranges"];
console.log(apples.price);
console.log(fruits.length);*/
/*var cash = 100;
var fruitSelected=apples;*/
function buyFruit(fruitSelected){
		cash -= applePrice;
		appleQuantity++;
		spentOnApples += applePrice;
		};

setInterval(function(){priceGenerator(apples.price)}, 2000);

function priceGenerator (price) {
		var num = randomNumber(0,1);
		if (num == 0){
			price += .5;
			console.log(price);
			console.log("price up 50");
		} else {
			price -= .5;
			console.log(price);
			console.log("price down 50");
		} 
		if (price < 0.50) {
			price = 0.50;
			return price;
		} else if (price > 9.99) {
			price = 9.99;
			return price;
		} else {
			console.log(price);
			return price;		
	};
};
	/*priceGenerator;
var upOrDown = function(){
	//go up or down .50
	if (randomNumber(0,1) > .5){
		return .5;
	} else {
		return -.5;
	}
};*/




console.log(apples);

var changePrices = function(){
for(var i = 0; i<fruits.length; i++){
	fruits[i] += upOrDown;
}
}

var upOrDown = function(){
	//go up or down .50
	if (randomNumber(0,1) > .5){
		return .5;
	} else {
		return -.5;
	}
}
console.log();
// fruit name, price


/*
	do dot set interval
var setInterval = function(){
	// every 15 seconds run change prices
	// javascript
};*/




});
// apples
/*var fruits = {apples:1,oranges:2,grapes:3,bananas:4,pears:5};
var fruits = [["apples",1],["oranges",2],["grapes",3],["bananas",4],["pears",5]];
function Fruit(quantity,price){
	this.quantity=quantity;
	this.price=price;
}*/

/*var fruitPrices= [1,2,3,4,5];*/
// inventory, cash on hand, 
/*function User(cash) {
	this.cash=cash;
	this.inventory = [];

	
}*/

/*var inventory = {apples:0,oranges:0,grapes:0,bananas:0,pears:0};
var spentOnEach = {apples:0,oranges:0,grapes:0,bananas:0,pears:0};
*/

/*var applePrice = randomNumber(.5,9.99);
var appleQuantity = 0;
var spentOnApples = 0;
var spentOnOranges = 0;
var orangesPrice = randomNumber(.5,9.99);
var orangesQuantity = 0;
var spentOnGrapes = 0;
var grapesPrice = randomNumber(.5,9.99);
var grapesQuantity = 0;
var spentOnBananas = 0;
var bananasPrice = randomNumber(.5,9.99);
var bananasQuantity = 0;
var spentOnPears = 0;
var pearsPrice = randomNumber(.5,9.99);
var pearsQuantity = 0;*/




//var avgPrice = totalSpent / totalBought;





/*
var timer = window.setInterval (function {
	
	var setPrice = randomNumberGenerator(0,1);

	if (setPrice === 0) {
		setPrice += 0.50;
	} else {
		setPrice -= 0.50;
	}
	return setPrice;

}, 15000); 
*/

	/*var fruits = ["apples", "bananas", "pears", "oranges"];
	for(var i = 0; i < fruits.length; i++){
		console.log(apples.price);*/