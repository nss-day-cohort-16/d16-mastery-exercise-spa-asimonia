/*jshint esversion: 6 */

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var carListing = document.getElementById("carListing");
  var outputString = "";

  for (let i = 0; i < inventory.length; i++) {
  	if (i % 3 === 0)
  		outputString += '<div class="row">';

  	var currentCar = inventory[i];

  	// Build up our DOM string
  	outputString += `<div class="col-xs-4 ${i}" id="${currentCar.vin}">`;
  	outputString += `<div class="inventory-card col-xs-12"><div class="panel panel-default">`;
  	outputString += `<div class="panel-heading"><h3 class="panel-title">`;
  	outputString += `${currentCar.year} `;
  	outputString += `${currentCar.make} `;
  	outputString += `${currentCar.model}`;
  	outputString += `</h3></div><div class="panel-body">`;
  	outputString += `<p class="description">${currentCar.description}</p></div>`;
  	outputString += `<div class="panel-footer"><p>$ ${currentCar.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>`;
  	outputString += `</div></div></div></div>`;

  	if (i > 0 && (i + 1) % 3 === 0)
  		outputString += `</div>`;
  }

  carListing.innerHTML += outputString;

  
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);