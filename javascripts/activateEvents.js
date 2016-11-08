/*jshint esversion: 6 */

var CarLot = (function (oldCarLot) {

	oldCarLot.activateEvents = function () {
		console.log("event activated");
		var cards = document.getElementsByClassName("inventory-card");
		var description = document.getElementById("description");
		var edit;

		for (let i = 0; i < cards.length; i++) {
			cards[i].addEventListener("click", function(event) {
				document.getElementById("description").focus();
				edit = event.currentTarget;
				console.log(edit);
				for (let z = 0; z < cards.length; z++) {
					CarLot.nullify(cards[z]);
				}
				document.getElementById("description").value = "";
				CarLot.highlight(cards[i], "red");
			});
		}

		description.addEventListener("keyup", function (event) {
			if (!edit) {
				alert("Choose a car");
				description.value = "";
			} else {
				description = event.target.value;
				edit.getElementsByClassName("description")[0].innerHTML = description;
			}
		});

	};

	return oldCarLot;

})(CarLot || {});