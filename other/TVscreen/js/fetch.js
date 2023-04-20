window.addEventListener('load', () => {

    const apiKey = "de09f2829c1f439a88b133130220801"
    let long
    let lat


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            //getting the coords of the user
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // //the api url for the fetch 
            let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat}, ${long}&aqi=no`
            // let url = ""

            //fetching the data
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    document.querySelector('h1').textContent = `TODAY IT'S ${data.current.condition.text.toUpperCase()}`
                    document.getElementById('title').textContent = `this is the weather in ${data.location.country}, ${data.location.name}`

                    document.getElementById('temp').textContent = `Temperature: ${data.current.temp_c} C`
                    document.getElementById('s_temp').textContent = `Thermal sensation: ${data.current.feelslike_c} C`
                    document.getElementById('precip').textContent = `Precipitation: ${data.current.precip_mm} mm`
                    
                    document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity} %`
                    document.getElementById('visv').textContent = `Visibility: ${data.current.vis_km} Km`
                    document.getElementById('wSpeed').textContent = `Wind: ${data.current.wind_kph} Km/H`


                });




        })
    }







})