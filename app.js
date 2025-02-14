
let amigos =[];
let amigosSorteados = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    let listaAmigos = document.getElementById("listaAmigos");
   // actualizarLista();

if (nombre === ""){
    input.placeholder("Por favor, digite un nombre.");
    return input.placeholder;
}

if(amigos.includes(nombre)){Input.placeholder("Ese nombre ya se encuentra registrado");
    document.getElementById("amigo").value="";
    return;
}

amigos.push(nombre);
actualizarLista();
document.getElementById("amigo").value ="";
}

function actualizarLista(){
    let listaAmigos= document.getElementById("listaAmigos");
    listaAmigos.innerHTML ="";

for(let i= 0; i< amigos.length; i++){
    let li =document.createElement("li");
    li.textContent =amigos[i];
    listaAmigos.appendChild(li);   
}
}
function limpiarCaja(){
    document.getElementById("amigo").valor ="";
}

function sortearAmigo(){
    if(amigos===0){input.placeholder("No se pueden sortear amigos")
        limpiarCaja();
    }else if(amigos.length<2){
    document.getElementById("amigo").placeholder = "se necesitan al menos 2 amigos para poder sortear";
    limpiarCaja();
    } else {
    let resultadoHTML = document.getElementById("resultado");
    let nombreSeleccionado = Math.floor(Math.random()*amigos.length);
    resultadoHTML.innerHTML =(`El amigo secreto es: ${amigos[nombreSeleccionado]}`)
    }
} 

sortearAmigo();

function reiniciarJuego() {
    amigos = [];
    amigosSorteados = [];
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
    actualizarLista();
}








