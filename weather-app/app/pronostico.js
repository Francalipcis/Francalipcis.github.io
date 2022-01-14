window.addEventListener('load', () => {
    const apiKey = "85458e89766b4083977dd960028c5c97"
    let long;
    let lat;




    //seteando los objetos del DOM para la api
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let to_day = new Date();


            const api = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${long}&key=${apiKey}&days=11&lang=es`
     

            fetch(api)
            .then(data => { //recolectando la data de la api y combirtuendola en un objeto
                return data.json();
            })
            .then(data =>{  //recolectando informacion del JSON
                console.log(data);





                for(var i = 1; i <= 5; i++){
                    //crear pronostico
                    let day = i
                    let pronosticList = document.getElementById('pronostico_container');
                    let element = document.createElement('div');
                    element.innerHTML = `
                        <h4 id="fecha_card${i}" class="fecha_c">${data.data[i].datetime}</h4>
                            <div class="card" id="card${i}">
                                <img src="./img/icons/${data.data[i].weather.icon}.png" alt="" class="img_card" id="img_c_${i}">
                                <h5 id="temp_c_${i}" class="temp_card">${Math.round(data.data[i].max_temp)}°C</h5>
                                <h5 id="humidity_c_${i}" class=" humidity_card">${data.data[i].precip}%</h5>
                                <h5 id="chance_c_${i}" class="change_card">${data.data[i].weather.description}</h5>
                            </div>
                    `;
                    pronosticList.appendChild(element);
                }
        
            })
        
        });
    }
});















