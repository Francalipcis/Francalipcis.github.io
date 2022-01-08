window.addEventListener('load', () => {
    const apiKey = "20d309141fbe4286c040b30e547ddf9c"
    let long;
    let lat;



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let to_day = new Date();



            const proxi = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxi}api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=${16}&lang=es&units=metric&appid=${apiKey}`
     

            fetch(api)
            .then(data => { //recolectando la data de la api y combirtuendola en un objeto
                return data.json();
            })
            .then(data =>{  //recolectando informacion del JSON
                console.log(data);
            })
        
        });
    }


});
















