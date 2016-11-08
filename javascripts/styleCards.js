/*jshint esversion: 6 */

var CarLot = (function (oldCarLot) {

	oldCarLot.nullify = function (card) {
		card.style.border="2px solid black";
    	card.style.background="pink";
	};

	oldCarLot.highlight = function (card, backgroundColor) {
		card.style.border = "10px dotted black";
		card.style.background = backgroundColor;
	};

	return oldCarLot;

})(CarLot || {});