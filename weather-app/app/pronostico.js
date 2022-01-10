window.addEventListener('load', () => {
    const apiKey = "85458e89766b4083977dd960028c5c97"
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


            //card 4
        let fecha4 = document.getElementById("fecha_card4");
        let temp_4 = document.getElementById("temp_c_4");
        let humidity_4 = document.getElementById("humidity_c_4");
        let chance_4 = document.getElementById("chance_c_4");


            //card 5
        let fecha5 = document.getElementById("fecha_card5");
        let temp_5 = document.getElementById("temp_c_5");
        let humidity_5 = document.getElementById("humidity_c_5");
        let chance_5 = document.getElementById("chance_c_5");

        


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let to_day = new Date();


            const proxi = 'https://cors-anywhere.herokuapp.com/'
            const api = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${long}&key=${apiKey}&days=7&lang=es`
     

            fetch(api)
            .then(data => { //recolectando la data de la api y combirtuendola en un objeto
                return data.json();
            })
            .then(data =>{  //recolectando informacion del JSON
                console.log(data);

                //Card1
                fecha1.textContent = data.data[1].datetime;

                temp_1.textContent = Math.round(data.data[1].temp) + "C°";

                humidity_1.textContent = "precip: " + data.data[1].precip + "%";

                chance_1.textContent = data.data[1].weather.description;

                //document.getElementById("img_c_1").src=`./icons/${data.list[1].weather[0].icon}.png`;

                    //resolver el tema de los iconos con los codigos de la api


                //fecha2
                fecha2.textContent = data.data[2].datetime;

                temp_2.textContent = Math.round(data.data[1].temp) + "C°";

                humidity_2.textContent = "precip: " + data.data[2].precip + "%";

                chance_2.textContent = data.data[2].weather.description;

                //document.getElementById("img_c_1").src=`./icons/${data.list[2].weather[0].icon}.png`;


                //fecha3
                fecha3.textContent = data.data[3].datetime;

                temp_3.textContent = Math.round(data.data[3].temp) + "C°";

                humidity_3.textContent = "precip: " + data.data[3].precip + "%";

                chance_3.textContent = data.data[3].weather.description;

                //document.getElementById("img_c_1").src=`./icons/${data.list[3].weather[0].icon}.png`;
            


                //fecha4
                fecha4.textContent = data.data[4].datetime;

                temp_4.textContent = Math.round(data.data[4].temp) + "C°";

                humidity_4.textContent = "precip: " + data.data[4].precip + "%";

                chance_4.textContent = data.data[4].weather.description;

                //document.getElementById("img_c_1").src=`./icons/${data.list[4].weather[0].icon}.png`;


                //fecha5
                fecha5.textContent = data.data[5].datetime;

                temp_5.textContent = Math.round(data.data[5].temp) + "C°";

                humidity_5.textContent = "precip: " + data.data[5].precip + "%";

                chance_5.textContent = data.data[5].weather.description;

                //document.getElementById("img_c_1").src=`./icons/${data.list[5].weather[0].icon}.png`;


                
            
            
            
            
            
            
            
            
            
            })
        
        });
    }
















});
















