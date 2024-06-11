import "./style.css";
import { getTemp, getWeather } from "./modules/weather";
import { drawCard } from "./modules/weatherDOM";

(async function component() {
	const element = document.createElement("div");
	const locationInput = document.createElement("input");
	let currWeather = await getWeather("bialystok").then((weather) => {
		console.log(weather);
		element.appendChild(drawCard(weather));
	});

	return element;
})().then((component) => {
	document.body.appendChild(component);
});
