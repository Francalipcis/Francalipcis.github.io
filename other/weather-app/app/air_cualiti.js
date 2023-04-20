window.addEventListener('load', () =>{
    const apiKey = "de09f2829c1f439a88b133130220801"
    let long;
    let lat;






    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //api 2
            const api2 = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${long}&aqi=yes&lang=es`




            fetch(api2)
            .then(data => {
                return data.json();
            })
            .then(data =>{
                console.log(data);
                const {precip_mm} = data.current;


                document.getElementById('precipitate').textContent = precip_mm + "%";



                document.getElementById('us_epa_index').textContent = data.current.air_quality["us-epa-index"];

                document.getElementById('co').textContent = "co: " + Math.round(data.current.air_quality.co);
                document.getElementById('no2').textContent = "no2: " + Math.round(data.current.air_quality.no2);
                document.getElementById('o3').textContent = "o3: " + Math.round(data.current.air_quality.o3);
                document.getElementById('so2').textContent = "so2: " + Math.round(data.current.air_quality.so2);
                
                document.getElementById('sky_description').textContent = data.current.condition.text;


                document.getElementById('temp').textContent = Math.round(data.current.temp_c);
            
                document.getElementById('humiditi').textContent = data.current.humidity;

                document.getElementById('wind_speed').textContent = data.current.wind_kph + "k/h";

                document.getElementById('precipitate').textContent = data.current.precip_mm + "%";
            




                //cambia el mensage de el id "description_wind" dependiendo la velosidad del viento
                let wind_spd = data.current.wind_kph;


/*
                if(wind_spd <= 1){
                    description_wind.textContent = "calma";
                }else if(between(wind_spd, 2, 11)){
                    description_wind.textContent = "Brisa muy débil";
                }else if(between(wind_spd, 12, 28)){
                    description_wind.textContent = "Brisa Moderada";
                }else if(between(wind_spd, 29, 38)){
                    description_wind.textContent = "Brisa Fresca";
                }else if(between(wind_spd, 39, 49)){
                    description_wind.textContent = "Brisa Fuerte";
                }else if(between(wind_spd, 50, 61)){
                    description_wind.textContent = "Viento Fuerte";
                }else if(between(wind_spd, 62, 74)){
                    description_wind.textContent = "Temporal";
                }else if(between(wind_spd, 75, 88)){
                    description_wind.textContent = "Temporal Fuerte";
                }else if(between(wind_spd, 89, 117)){
                    description_wind.textContent = "Temporal muy fuerte";
                }else if(wind_spd >= 118){
                    description_wind.textContent = "Vientos Huracanados";
                }
*/                
                


                let temp = data.current.temp_c;
                //cambia la imagen de la temperatura dependiendo de la misma
                if (temp >= 28){
                    document.getElementById('temp_img').src="./img/icons/hot.png";
                }else if (between(temp, 20, 28)){
                    document.getElementById('temp_img').src="./img/icons/warm.png";
                }else if (temp <= 19 ){
                    document.getElementById('temp_img').src="./img/icons/cold.png";
                }


                
                /*
                //cambia la imagen del #sky dependiendo la hora
                if (data.current.condition.icon == "01d"){
                    
                    if(all >= 100){
                        if(humidity >= 98){
                        }else{
                            document.getElementById('sky_img').src="./img/icons/c04d.png";
                        }
                    }else{
                        if(humidity >= 98){
                            document.getElementById('sky_img').src="./img/icons/r01d.png";
                        }else{
                            document.getElementById('sky_img').src="./img/icons/c01d.png";
                            console.log("tarde");
                        }

                    }
                    
                }else if (icon == "01n"){

                    if(all >= 100){
                        if(humidity >= 98){
                            document.getElementById('sky_img').src="./img/icons/r01n.png";
                        }else{
                            document.getElementById('sky_img').src="./img/icons/c04n.png";
                        }
                    }else{
                        if(humidity >= 98){
                            document.getElementById('sky_img').src="./img/icons/r01n.png";
                        }else{
                            document.getElementById('sky_img').src="./img/icons/c01n.png";
                            console.log("tarde");
                        }
                    }
                }

                */



                function between(x, min, max) {
                    return x >= min && x <= max;
                }








                
            
            })





        });
    }



});