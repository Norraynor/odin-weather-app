import "./style.css";
import { getTemp, getWeather } from "./modules/weather";
import { drawCard } from "./modules/weatherDOM";
import { createForm } from "./modules/form";

(async function component() {
	const element = document.createElement("div");
	const locationInput = document.createElement("input");
	let form = createForm();
	element.appendChild(form);
	const cardContainer = document.createElement("div");
	cardContainer.classList.add("card-container");
	element.appendChild(cardContainer);

	let currWeather = await getWeather("bialystok").then((weather) => {
		cardContainer.appendChild(drawCard(weather));
	});

	document.addEventListener("search", async (e) => {
		console.log(e);
		cardContainer.textContent = "";
		currWeather = await getWeather(e.detail).then((weather) => {
			cardContainer.appendChild(drawCard(weather));
		});
	});

	return element;
})().then((component) => {
	document.body.appendChild(component);
});
