function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var cars = document.getElementById("cars");
  var outputString = "";

  for (let i = 0; i < inventory.length; i++) {
  	var currentCar = inventory[i];

  	// Build up our DOM string
  	outputString += `<div class="inventory-card"><h1>${currentCar.make}</h1>`;
  	outputString += `<h3>${currentCar.model}</h3>`;
  	outputString += `<h3>${currentCar.year}</h3>`;
  	outputString += `<h3>${currentCar.price}</h3>`;
  	outputString += `<h3>${currentCar.description}</h3></div>`;
  }

  cars.innerHTML = outputString;

  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);