var id = 1;




//cambio del color del texto
function changeColor(newColor) {
    var element = document.getElementById("titulo");
    element.style.color = newColor;
}


//Cambio del contenido del texto
function changeText(newtext) {
    var element = document.getElementById("titulo");
    element.textContent = newtext;    
}



//suma un numero a la variable id
function newId() {
    id = id +1;
}





function newTitle() {
    ///titulo
    //recolecta en una variable el texto del titulo
    var titleVarText = prompt("Nuevo elemento");


    //crea el h1 donde se almacenara el nodo de texto
    var title = document.createElement("h1");
    //se crea el contenido del h1
    var titleText = document.createTextNode(titleVarText);
    //agrega una id a el elemento creado   
    title.setAttribute("id", titleVarText);
    title.setAttribute("class", "item");

    
    //se posiciona al nodo de teexto como hijo de el nodo h1
    title.appendChild(titleText);


    //se agrega el nodo div(junto con el de texto) al DOM
    var div = document.getElementById("div");
    document.body.insertBefore(title, div);




    //click para eliminar
    title.onclick = function deleteOnClick() {
        //this.parentNode.removeChild(this);
        var element = document.getElementById(titleVarText);
        element.style.setProperty("text-decoration", "line-through");
    }

}



function deleteTitle() {
    //variable que almacena el id del titulo
    var title = prompt("que elemento desea eliminar");    

    //variable node que almacena el titulo del nodo
    var node = document.getElementById(title);
    //elimina el nodo
    node.parentNode.removeChild(node);


}