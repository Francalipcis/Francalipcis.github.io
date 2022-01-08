window.addEventListener('load', () => {
    const apiKey = "1cea7c07d85f104f3d22ef9530efc69a"
    let long;
    let lat;


    let Description = document.getElementById('sky_description');


    let temperature = document.getElementById('temp');
    let humiditi = document.getElementById('humiditi');

    let Country = document.getElementById('country'); 
    let City = document.getElementById('city');
    let cordinates_lat = document.getElementById('coordinates_lat');
    let cordinates_lon = document.getElementById('coordinates_lon');



    let wind_speed = document.getElementById('wind_speed');
    let description_wind = document.getElementById('description_wind');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let to_day = new Date();



            const proxi = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxi}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&lang=es&units=metric`
     

            fetch(api)
            .then(data => { //recolectando la data de la api y combirtuendola en un objeto
                return data.json();
            })
            .then(data =>{  //recolectando informacion del JSON
                console.log(data);
                const {temp, humidity, pressure} = data.main;
                const {country} = data.sys;
                const {lat, lon} = data.coord;
                const {speed} = data.wind;
                const {all} = data.clouds;


                    //Seteando los elementos del dom de la api

                //definiendo si esta despejado o nublado dependiendo la cantidad de nuves 
                if(all < 100){
                    Description.textContent = "clear";
                }else{
                    Description.textContent = "cloudy";
                }

                //localisacion
                Country.textContent = data.name + ", ";
                City.textContent = country;   

                //humedad
                humiditi.textContent = humidity;

                //temperatura
                temperature.textContent = Math.round(temp);
                
                //velocidad del viento
                wind_speed.textContent = speed + "K/h";


                //cambia el mensage de el id "description_wind" dependiendo la velosidad del viento
                if(speed <= 1){
                    description_wind.textContent = "Calm";
                }else if(between(speed, 2, 11)){
                    description_wind.textContent = "Weak breeze";
                }else if(between(speed, 12, 28)){
                    description_wind.textContent = "Moderate breeze";
                }else if(between(speed, 29, 38)){
                    description_wind.textContent = "Fresh breeze";
                }else if(between(speed, 39, 49)){
                    description_wind.textContent = "Strong breeze";
                }else if(between(speed, 50, 61)){
                    description_wind.textContent = "Strong wind";
                }else if(between(speed, 62, 74)){
                    description_wind.textContent = "Temporary";
                }else if(between(speed, 75, 88)){
                    description_wind.textContent = "Strong temporary";
                }else if(between(speed, 89, 117)){
                    description_wind.textContent = "Very hard temporary";
                }else if(speed >= 118){
                    description_wind.textContent = "Hurricane storm";
                }


                //cambia la imagen del #sky dependiendo la hora
                if (between(to_day.getHours(), 6, 12) ){
                    document.getElementById('sky_img').src="./icons/sunrise.png";
                }
                
                if (between(to_day.getHours(), 12, 19) ){
                    document.getElementById('sky_img').src="./icons/sun.png";
                }
                
                if (between(to_day.getHours(), 19, 24) ){
                    document.getElementById('sky_img').src="./icons/night.png";
                }

                

                //cambia la imagen de la temperatura dependiendo de la misma
                if (temp >= 28){
                    document.getElementById('temp_img').src="./icons/hot.png";
                }else if (between(temp, 20, 27)){
                    document.getElementById('temp_img').src="./icons/warm.png";
                }else if (temp <= 19 ){
                    document.getElementById('temp_img').src="./icons/cold.png";
                }







                function between(x, min, max) {
                    return x >= min && x <= max;
                }
                
            })
        
        });
    }


});
















