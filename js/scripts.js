
  var url = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
 
  fetch(url, { cache: 'no-store' })
  .then((response) => response.json()) // Return it as JSON data
  .then((data) => { // Do stuff with the data
     
    let todayDate = document.getElementById('date');
    let atmoCondition = document.getElementById('condition');
    let radiationLevel = document.getElementById('radiation');
    let headTemp = document.getElementById('head_temp');
    let groundTemp = document.getElementById('ground_temp');
    let currentTemp = document.getElementById('current_temp');


    headTemp.innerHTML = data.soles[0].min_temp  + ' - ' + data.soles[0].max_temp ;
    groundTemp.innerHTML = data.soles[0].min_gts_temp + ' - ' +  data.soles[0].max_gts_temp ;
    todayDate.innerHTML = data.soles[0].terrestrial_date;
    atmoCondition.innerHTML = data.soles[0].atmo_opacity;
    radiationLevel.innerHTML = data.soles[0].local_uv_irradiance_index;

    let averageTemp = (parseFloat(data.soles[0].min_temp) + parseFloat(data.soles[0].max_temp))/2;
    console.log(averageTemp);
    currentTemp.innerHTML = averageTemp;
    })




