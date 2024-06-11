function drawCard(weatherObj) {
	const container = document.createElement("div");
	container.classList.add("container");

	const location = document.createElement("h3");
	location.classList.add("location");
	location.textContent = weatherObj.location;

	const icon = document.createElement("img");
	icon.classList.add("icon");
	icon.src = weatherObj.conditionIcon;

	const text = document.createElement("p");
	text.classList.add("text");
	text.textContent = weatherObj.conditionText;

	const tempC = document.createElement("p");
	tempC.classList.add("temp");
	tempC.textContent = `${weatherObj.tempC} C`;

	const wind = document.createElement("div");
	wind.classList.add("wind");
	const windSpeed = document.createElement("p");
	const windDir = document.createElement("p");
	windSpeed.textContent = `Wind speed: ${weatherObj.windSpeed}`;
	windDir.textContent = `Direction: ${weatherObj.windDir}`;
	wind.appendChild(windSpeed);
	wind.appendChild(windDir);

	container.appendChild(location);
	container.appendChild(icon);
	container.appendChild(text);
	container.appendChild(tempC);
	container.appendChild(wind);

	return container;

	//icon
	//text
	//temp
	//windspeed winddir
}

export { drawCard };
