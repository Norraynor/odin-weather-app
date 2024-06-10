async function getWeather(location) {
	const currentWeather = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=cfec2b650265458d832172312241006&q=${location}`,
		{
			mode: "cors",
		}
	);
	const response = await currentWeather.json();
	console.log(response);
	return {
		tempC: getTemp(response),
		conditionText: getConditionText(response),
		conditionIcon: getConditionIcon(response),
		windSpeed: getWindSpeed(response),
		windDir: getWindDir(response),
	};
}

function getTemp(response) {
	return response.current.temp_c;
}
function getConditionIcon(response) {
	return response.current.condition.icon;
}
function getConditionText(response) {
	return response.current.condition.text;
}
function getWindSpeed(response) {
	return response.current.wind_kph;
}
function getWindDir(response) {
	return response.current.wind_dir;
}
export { getWeather };
