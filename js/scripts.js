
const url = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
let database = [];

class DayData {
	constructor(todayDate,minTemp,maxTemp,minGroundTemp,maxGroundTemp,atmoCondition,radiationLevel) {
		this.todayDate = todayDate;
		this.minTemp = minTemp;
		this.maxTemp = maxTemp;
		this.minGroundTemp = minGroundTemp;
		this.maxGroundTemp = maxGroundTemp;
		this.atmoCondition = atmoCondition;
		this.radiationLevel = radiationLevel;
	}
	headTemp(){
		return this.minTemp + ' – ' + this.maxTemp;
	}
	groundTemp(){
		return this.minGroundTemp + ' – ' + this.maxGroundTemp;
	}
	averageTemp() {
		return (parseFloat(this.minTemp) + parseFloat(this.maxTemp))/2;
	}
}

fetch(url, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data

		console.log(data);

		for ( let day in data.soles) {
			// console.log(day);

			//date
			let todayDate = data.soles[day].terrestrial_date;

			//temp
			let minTemp = data.soles[day].min_temp;
			let maxTemp = data.soles[day].max_temp;
			let minGroundTemp = data.soles[day].min_gts_temp;
			let maxGroundTemp = data.soles[day].max_gts_temp;

			//other
			let atmoCondition = data.soles[day].atmo_opacity;
			let radiationLevel = data.soles[day].local_uv_irradiance_index;

			let newData = new DayData(todayDate,minTemp,maxTemp,minGroundTemp,maxGroundTemp,atmoCondition,radiationLevel);
			database.push(newData);
		}
		
		displayInfo(0);
		console.log(database);

	})

function displayInfo(day) {
	let display_todayDate = document.getElementById('date');
	let display_atmoCondition = document.getElementById('condition');
	let display_radiationLevel = document.getElementById('radiation');
	let display_headTemp = document.getElementById('head_temp');
	let display_groundTemp = document.getElementById('ground_temp');
	let display_currentTemp = document.getElementById('current_temp');

	display_todayDate.innerHTML = database[day].todayDate;
	display_headTemp.innerHTML = database[day].headTemp();
	display_groundTemp.innerHTML = database[day].groundTemp();
	display_atmoCondition.innerHTML = database[day].atmoCondition;
	display_radiationLevel.innerHTML = database[day].radiationLevel;
	display_currentTemp.innerHTML = database[day].averageTemp();
}


