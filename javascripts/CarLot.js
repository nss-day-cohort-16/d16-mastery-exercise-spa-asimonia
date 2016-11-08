var CarLot = (function () {
	var inventory = [];

	return {
		loadInventory: function (callback) {
			var inventoryLoader = new XMLHttpRequest();
			inventoryLoader.open("GET", "data/inventory.json");
			inventoryLoader.send();

			inventoryLoader.addEventListener("load", function () {
				inventory = JSON.parse(this.responseText).cars;
				// pass the inventory to the callback function
				callback(inventory);
			});
		},
		getInventory: function () {
			return inventory;
		},
		activateEvents: function () {
			// add event listners here
		}
	};
})();