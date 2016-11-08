var CarLot = (function (oldCarLot) {

	oldCarLot.activateEvents = function () {
		console.log("Yes");
	};

	return oldCarLot;

})(CarLot || {});