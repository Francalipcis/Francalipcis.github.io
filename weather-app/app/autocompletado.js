window.addEventListener('load', () => {
    const apiKey = "de09f2829c1f439a88b133130220801"
    

        navigator.geolocation.getCurrentPosition(position =>{
                console.log(position);
                
                document.getElementById('C_inputButton').onclick = () =>{

                    let datos = document.getElementById('input_country').value;

                    const api = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${datos}`


                    fetch(api)
                    .then(data => { //recolectando la data de la api y combirtuendola en un objeto
                        return data.json();
                    })
                    .then(data =>{  //recolectando informacion del JSON
                        console.log(data);
                    })

            };
        });
});
