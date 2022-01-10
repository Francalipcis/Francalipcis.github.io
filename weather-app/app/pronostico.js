window.addEventListener('load', () => {
    const apiKey = "49c60457d616bfc98ae64346d1c7205c"
    let long;
    let lat;




    //seteando los objetos del DOM para la api
        //card 1
        let fecha1 = document.getElementById("fecha_card1");
        let temp_1 = document.getElementById("temp_c_1");
        let humidity_1 = document.getElementById("humidity_c_1");
        let chance_1 = document.getElementById("chance_c_1");
    
            //card 2
        let fecha2 = document.getElementById("fecha_card2");
        let temp_2 = document.getElementById("temp_c_2");
        let humidity_2 = document.getElementById("humidity_c_2");
        let chance_2 = document.getElementById("chance_c_2");
    
            //card 3
        let fecha3 = document.getElementById("fecha_card3");
        let temp_3 = document.getElementById("temp_c_3");
        let humidity_3 = document.getElementById("humidity_c_3");
        let chance_3 = document.getElementById("chance_c_3");





    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let to_day = new Date();


            const proxi = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxi}api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`
     

            fetch(api)
            .then(data => { //recolectando la data de la api y combirtuendola en un objeto
                return data.json();
            })
            .then(data =>{  //recolectando informacion del JSON
                console.log(data);

                //Card1
                fecha1.textContent = data.list[3].dt_txt;

                temp_1.textContent = Math.round(data.list[3].main.temp) + "C°";

                humidity_1.textContent = "humidity: " + data.list[3].main.humidity + "%";

                chance_1.textContent = data.list[3].weather[0].description;

                document.getElementById("img_c_1").src=`./icons/${data.list[3].weather[0].icon}.png`;


                //fecha2
                fecha2.textContent = data.list[11].dt_txt;
                temp_2.textContent = Math.round(data.list[7].main.temp) + "C°";

                humidity_2.textContent = "humidity: " + data.list[7].main.humidity + "%";

                chance_2.textContent = data.list[7].weather[0].description;

                document.getElementById("img_c_2").src=`./icons/${data.list[11].weather[0].icon}.png`;


                //fecha3
                fecha3.textContent = data.list[19].dt_txt;
                temp_3.textContent = "temp: " + Math.round(data.list[15].main.temp) + "C°";

                humidity_3.textContent = "humidity: " + data.list[15].main.humidity + "%";

                chance_3.textContent = data.list[15].weather[0].description;
            
                document.getElementById("img_c_3").src=`./icons/${data.list[19].weather[0].icon}.png`;
            
            
            
            
            
            
            
            
            
            })
        
        });
    }
















});
















