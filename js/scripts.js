
  var url = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json";
 
  fetch(url, { cache: 'no-store' })
  .then((response) => response.json()) // Return it as JSON data
  .then((data) => { // Do stuff with the data
     console.log(data);

    })


