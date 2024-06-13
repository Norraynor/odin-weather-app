function createForm() {
	const form = document.createElement("form");
	form.method = "post";
	const label = document.createElement("label");
	label["for"] = "location";
	label.textContent = "Whats the weather in: ";
	//for = same as input id
	const input = document.createElement("input");
	input.type = "text";
	input.id = "location";
	input.name = "location";

	const searchButton = document.createElement("button");
	searchButton.textContent = "Search";
	searchButton.type = "submit";
	searchButton.addEventListener("click", (e) => {
		e.preventDefault();
		//handle form data here
		let inputField = form.querySelector("input");
		let location = inputField.value;

		// Add an event listener
		// document.addEventListener("search", function (e) {
		// 	console.log(e.detail); // Prints "Example of an event"
		// });

		// Create the event
		var event = new CustomEvent("search", {
			detail: location,
		});

		// Dispatch/Trigger/Fire the event
		document.dispatchEvent(event);
	});

	form.appendChild(label);
	form.appendChild(input);
	form.appendChild(searchButton);

	return form;
}

export { createForm };
