"use strict";

var CarLot = (function (oldCarLot) {
	let _inventory = [];

	oldCarLot.loadInventory = function (callback) {
		let inventoryLoader = new XMLHttpRequest();
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