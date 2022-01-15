document.getElementById('save').onclick = () => {
    const apiKey = "49c60457d616bfc98ae64346d1c7205c";
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;

    let temperature = document.getElementById('temp');
    let Humidity = document.getElementById('humiditi');

    let Description = document.getElementById('sky_description');
    let wind_speed = document.getElementById('wind_speed');
    let description_wind = document.getElementById('description_wind');
            


    const proxi = 'https://cors-anywhere.herokuapp.com/'
                
    //api 1 
    const api = `${proxi}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
    
    console.log(api);
                
    fetch(api)
    
    .then(data  => {
        return data.json();
    })
    .then(data => {
        console.log(data);
                    
        const {description, icon} = data.weather;
                    
        const {humidity, temp} = data.main;
                
                    //Description sky
                    
        Description.textContent = description;
                    
                    //humedad
        Humidity.textContent = Math.round(humidity);
                
                    //temperatura
        temperature.textContent = Math.round(temp);
                
                    //velocidad del viento
        wind_speed.textContent = data.wind.speed + " K/h";
                    
                    
                    
                    
                    
                    //cambia el mensage de el id "description_wind" dependiendo la velosidad del viento
        let wind_spd = data.wind.speed;
                    
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

                
                
                
                //cambia la imagen de la temperatura dependiendo de la misma
        if (temp >= 28){
            document.getElementById('temp_img').src="../img/icons/hot.png";
        }else if (between(temp, 20, 28)){
            document.getElementById('temp_img').src="../img/icons/warm.png";
        }else if (temp <= 19 ){
            document.getElementById('temp_img').src="../img/icons/cold.png";
        }
                
                
                
                
                //cambia la imagen del #sky dependiendo la hora
        if (icon == "01d"){
            if(all >= 100){
                if(humidity >= 98){
                    document.getElementById('sky_img').src="../img/icons/r01d.png";
                }else{
                    document.getElementById('sky_img').src="../img/icons/c04d.png";
                }
            }else{
                if(humidity >= 98){
                    document.getElementById('sky_img').src="../img/icons/r01d.png";
                }else{
                    document.getElementById('sky_img').src="../img/icons/c01d.png";
                    console.log("tarde");
                }
                        
            }
                    
        }else if (icon == "01n"){
                    
            if(all >= 100){
                if(humidity >= 98){
                    document.getElementById('sky_img').src="../img/icons/r01n.png";
                }else{
                    document.getElementById('sky_img').src="../img/icons/c04n.png";
                }
            }else{
                if(humidity >= 98){
                    document.getElementById('sky_img').src="../img/icons/r01n.png";
                }else{
                    document.getElementById('sky_img').src="../img/icons/c01n.png";
                    console.log("tarde");
                }
            }
        }

                
                
                

        function between(x, min, max) {
            return x >= min && x <= max;
        }                
                

                
                
    })
    };