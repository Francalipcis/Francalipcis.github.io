window.addEventListener('load', () => {
    const apiKey = "de09f2829c1f439a88b133130220801"
    let long;
    let lat;


    let position


    let Description = document.getElementById('sky_description');


    let temperature = document.getElementById('temp');
    let humiditi = document.getElementById('humiditi');
    let Precipitate = document.getElementById('precipitate');



    let Country = document.getElementById('country'); 
    let City = document.getElementById('city');



    let wind_speed = document.getElementById('wind_speed');
    let description_wind = document.getElementById('description_wind');


    let us_epa_index = document.getElementById('us_epa_index');
    let Co = document.getElementById('co');
    let No2 = document.getElementById('no2');
    let O3 = document.getElementById('o3');
    let So2 = document.getElementById('so2');
    


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            
            let to_day = new Date();


            const proxi = 'https://cors-anywhere.herokuapp.com/'

            const api = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${long}&lang=es&aqi=yes`


            fetch(api)
            .then(data => { //recolectando la data de la api y combirtuendola en un objeto
                return data.json();
            })
            .then(data =>{  //recolectando informacion del JSON
                console.log(data);
                const {cloud, humidity, temp_c, wind_kph, precip_mm} = data.current;
                const {co, no2, o3, so2} = data.current.air_quality;
                const {text} = data.current.condition;
                const {tz_id} = data.location


                
                //Seteando los elementos del dom de la api

                //definiendo si esta despejado o nublado dependiendo la cantidad de nuves 
                Description.textContent = text;

                
                //localisacion
                Country.textContent = tz_id;
                
                //humedad
                humiditi.textContent = humidity;
                
                //precipitaciones
                Precipitate.textContent = precip_mm;

                //temperatura
                temperature.textContent = Math.round(temp_c);
                
                //velocidad del viento
                wind_speed.textContent = wind_kph + "K/h";

                //calidad del aire
                us_epa_index.textContent = data.current.air_quality["us-epa-index"];
                
                Co.textContent = "co: " + Math.trunc(co);
                No2.textContent = "no2: " + Math.trunc(no2);
                O3.textContent = "o3: " + Math.trunc(o3);
                So2.textContent = "so2: " + Math.trunc(so2);
                

                
                //cambia el mensage de el id "description_wind" dependiendo la velosidad del viento
                if(wind_kph <= 1){
                    description_wind.textContent = "calma";
                }else if(between(wind_kph, 2, 11)){
                    description_wind.textContent = "Brisa muy débil";
                }else if(between(wind_kph, 12, 28)){
                    description_wind.textContent = "Brisa Moderada";
                }else if(between(wind_kph, 29, 38)){
                    description_wind.textContent = "Brisa Fresca";
                }else if(between(wind_kph, 39, 49)){
                    description_wind.textContent = "Brisa Fuerte";
                }else if(between(wind_kph, 50, 61)){
                    description_wind.textContent = "Viento Fuerte";
                }else if(between(wind_kph, 62, 74)){
                    description_wind.textContent = "Temporal";
                }else if(between(wind_kph, 75, 88)){
                    description_wind.textContent = "Temporal Fuerte";
                }else if(between(wind_kph, 89, 117)){
                    description_wind.textContent = "Temporal muy fuerte";
                }else if(wind_kph >= 118){
                    description_wind.textContent = "Vientos Huracanados";
                }
                
                
                
                //cambia la imagen de la temperatura dependiendo de la misma
                if (temp_c >= 28){
                    document.getElementById('temp_img').src="./icons/hot.png";
                }else if (between(temp_c, 20, 28)){
                    document.getElementById('temp_img').src="./icons/warm.png";
                }else if (temp_c <= 19 ){
                    document.getElementById('temp_img').src="./icons/cold.png";
                }


                
                
                //cambia la imagen del #sky dependiendo la hora
                if (data.current.condition.icon == "//cdn.weatherapi.com/weather/64x64/day/113.png"){
                    
                    if(cloud >= 100){
                        if(humidity >= 98){
                            document.getElementById('sky_img').src="./icons/r01d.png";
                        }else{
                            document.getElementById('sky_img').src="./icons/c04d.png";
                        }
                    }else{
                        if(humidity >= 98){
                            document.getElementById('sky_img').src="./icons/r01d.png";
                        }else{
                            document.getElementById('sky_img').src="./icons/c01d.png";
                            console.log("tarde");
                        }

                    }
                    
                }else if (data.current.condition.icon == "//cdn.weatherapi.com/weather/64x64/night/113.png"){

                    if(cloud >= 100){
                        if(humidity >= 98){
                            document.getElementById('sky_img').src="./icons/r01n.png";
                        }else{
                            document.getElementById('sky_img').src="./icons/c04n.png";
                        }
                    }else{
                        if(humidity >= 98){
                            document.getElementById('sky_img').src="./icons/r01n.png";
                        }else{
                            document.getElementById('sky_img').src="./icons/c01n.png";
                            console.log("tarde");
                        }
                    }
                }

                



                function between(x, min, max) {
                    return x >= min && x <= max;
                }
                
            })
        
        });
    }


});
















