window.addEventListener('load', () =>{
    document.getElementById('menu2').style.visibility = "hidden";
    
});


document.getElementById('menu').onclick = () =>{
        document.getElementById('menu').style.visibility = "hidden";
        document.getElementById('menu2').style.visibility = "visible";
    

        document.getElementById('tab').classList.remove('-hide');
        document.getElementById('body-container').style.visibility = "hidden";
        document.getElementById('tab').classList.add('-show');   
};


document.getElementById('menu2').onclick = () =>{
    document.getElementById('menu2').style.visibility = "hidden";
    document.getElementById('menu').style.visibility = "visible";


    document.getElementById('tab').classList.add('-hide');
    document.getElementById('body-container').style.visibility = "visible";
    document.getElementById('tab').classList.remove('-show');
};