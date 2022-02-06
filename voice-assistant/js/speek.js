
let recognition = new webkitSpeechRecognition();

let audoG = "";


recognition.lang = 'es-AR';
recognition.continuous = true;
recognition.inerimResults = false;


recognition.onresult = () =>{
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    
    document.getElementById('texto').textContent = "user: " + frase;
    
}

recognition.start();



if (annyang){
    var commands = {
        'hello *tag': () => {
            speeak("hello");
            
        },

        'ok': () => {
            speeak("ok");
        },

        'how are you': () => {
            speeak("I'm fine, thanks");
        },

        'what is your name': () => {
            speeak("my name is bot");  
        },

        'what is your purpose': () => {
            speeak("my purpose is to help you");
        },

        'Who is your creator': () => {
            speeak("my creator is Francalipcis");
        },


        'turn on the lights of the pc': () => {
            speeak("I'm not programmed to do that yet")
        },


        'play random music': () => {
            randomMusic();
            speeak('playing random music');
        },



        'open youtube': () => {
            window.open('https://www.youtube.com/');
            speeak('opening youtuve');

        },

        'open mercado libre': () => {
            window.open('https://www.mercadolibre.com.ar/');
            speeak('opening mercado libre');
        },

        
        'search *tag': function(tag) {
            window.open(`https://www.google.com/search?q=${tag}&rlz=1C1CHBD_esAR963AR963&oq=${tag}&aqs=chrome..69i57j0i131i433i512j0i512j46i175i199i512j0i131i433j0i512l2j0i457i512j0i131i433j46i131i175i199i433.968j0j7&sourceid=chrome&ie=UTF-8`);
            speeak("ok. searching, " + tag);
        },


    };
    
                                        ///------crear animaciones de la pantalla------////
    //funcion para reproducir audio
    function speeak(text){
        if(responsiveVoice.voiceSupport()){

            responsiveVoice.speak(text);
            
            document.getElementById('bot_voice').textContent = text;
            //writing(text);
        }else{
            alert("no soportado");
        }
    }
    




    //repruducir musica random
    function randomMusic(stat){
        const number = Math.floor(Math.random() * 10) + 1;
        let url = "";

        if(number == 1){
            url = 'https://www.youtube.com/watch?v=N2Y2vQ-1m7M&list=RDMM';

        }else if(number == 2){
            url = 'https://www.youtube.com/watch?v=rRUjAE7zKpc&list=RDMM&index=3';

        }else if(number == 3){
            url = 'https://www.youtube.com/watch?v=L_jWHffIx5E&list=RDMM&index=4';

        }else if(number == 4){
            url = 'https://www.youtube.com/watch?v=hM7Eh0gGNKA&list=RDMM&index=5';

        }else if(number == 5){
            url = 'https://www.youtube.com/watch?v=EKLWC93nvAU&list=RDMM&index=6';

        }else if(number == 6){
            url = 'https://www.youtube.com/watch?v=8FR0u0lnUh4&list=RDMM&index=6';

        }else if(number == 7){
            url = 'https://www.youtube.com/watch?v=VKFjLxkkSv0&list=RDMM&index=7';

        }else if(number == 8){
            url = 'https://www.youtube.com/watch?v=_LwX7GCE5rI&list=RDMM&index=8';

        }else if(number == 9){
            url = 'https://www.youtube.com/watch?v=qRUM_hQbXNQ&list=RDMM&index=9';

        }else if(number == 10){
            url = 'https://www.youtube.com/watch?v=uAOR6ib95kQ&list=RDMM&index=10';

        }else if(number == 11){
            url = 'https://www.youtube.com/watch?v=u9O5jUcfQus&list=RDMM&index=12';
        
        }else if(number == 12){
            url = 'https://www.youtube.com/watch?v=m_aGcmKAdJM&list=RDMM&index=12';
        
        }else if(number == 13){
            url = 'https://www.youtube.com/watch?v=gCYcHz2k5x0&list=RDMM&index=13';
        
        }else if(number == 14){
            url = 'https://www.youtube.com/watch?v=jpw2ebhTSKs&list=RDMM&index=14';
        
        }else if(number == 15){
            url = 'https://www.youtube.com/watch?v=RKW6rjnYEkc&list=RDMM&index=15';
        
        }else if(number == 16){
            url = 'https://www.youtube.com/watch?v=JzpYPTe1vW8&list=RDMM&index=16';
        
        }else if(number == 17){
            url = 'https://www.youtube.com/watch?v=lX44CAz-JhU&list=RDMM&index=17';
        
        }else if(number == 18){
            url = 'https://www.youtube.com/watch?v=tyIrUmWNr08&list=RDMM&index=18';
        
        }else if(number == 19){
            url = 'https://www.youtube.com/watch?v=aSjflT_J0Xo&list=RDMM&index=19';
        
        }else if(number == 20){
            url = 'https://www.youtube.com/watch?v=4-43lLKaqBQ&list=RDMM&index=20';
        
        }
        
        
        window.open(url);







    }




    annyang.addCommands(commands);
    //annyang.setLanguage("");
    annyang.start();
}






//          arreglar la escritura animada
/*
let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.body.innerHTML += arrFromStr[i];
        i++;


        if( i === arrFromStr.length ){
            clearInterval(printStr);
        }
    },70)
};

*/
