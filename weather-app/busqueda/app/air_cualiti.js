document.getElementById('save').onclick = () => {
    let apiKey = "de09f2829c1f439a88b133130220801"

    let country = document.getElementById('city').value;
    let city = document.getElementById('country').value;



    
    const api2 = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city},${country}&aqi=yes&lang=es`
    

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



    })

};