
let recognition = new webkitSpeechRecognition();


recognition.lang = 'es-AR';
recognition.continuous = true;
recognition.inerimResults = false;

recognition.onresult = () =>{
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    
    document.getElementById('texto').textContent = "user: " + frase;
    
}


recognition.start();