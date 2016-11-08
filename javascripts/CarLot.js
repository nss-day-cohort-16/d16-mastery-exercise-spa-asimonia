/*jshint esversion: 6 */

var CarLot = (function (oldCarLot) {
	var _inventory = [];

	oldCarLot.loadInventory = function (callback) {
		var inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "data/inventory.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function () {
			_inventory = JSON.parse(this.responseText).cars;
			callback(_inventory);
		});
	};

	oldCarLot.getInventory = function () {
		return _inventory;
	};

	return oldCarLot;

})(CarLot || {});