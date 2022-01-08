let to_day = new Date();

let hour = to_day.getHours() + ':' + to_day.getMinutes();

let estado;


if (between(to_day.getHours(), 6, 12) ){
    document.getElementById('sky_img').src="./icons/sunrise.png";
}

if (between(to_day.getHours(), 12, 19) ){
    document.getElementById('sky_img').src="./icons/sun.png";
}

if (between(to_day.getHours(), 19, 24) ){
    document.getElementById('sky_img').src="./icons/night.png";
}

