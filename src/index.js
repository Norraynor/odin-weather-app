import "./style.css";
import { getTemp, getWeather } from "./modules/weather";

function component() {
	const element = document.createElement("div");
	let weather = getWeather("bialystok");
	console.log(weather);
	const text = document.createElement("h1");
	text.textContent = "weather app";
	element.appendChild(text);
	return element;
}

document.body.appendChild(component());
