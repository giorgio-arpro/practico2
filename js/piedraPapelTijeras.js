
let palo =0;
let ganadas_compu=0;
let ganadas_jugador=0;
//capturo el nombre para usarlo en el saludo y en los resultados
function saludar() {
    let nombre=document.getElementById('nombre').value;
    if (!nombre) {//valido el nombre para que no sea vacío
        alert('Escriba un nombre válido!!!');
    } else {
        const divSaludo=document.getElementById('saludo');
        document.getElementById('login').style.display="none";
        document.getElementById('divfoto').style.display="none";
        divSaludo.innerHTML = "Bienvenido/a <i style='color: blue;'>"+nombre+"</i>!!! elige para jugar!!!";
        document.getElementById('elige').style.display="block";
        document.getElementById('resultado').style.display="block";
        
    }
}
//en espera del evento: jugador elige una carta, y llama a las función jugada();
addEventListener('DOMContentLoaded',function(){
    let botonPiedra=document.getElementById('piedra');
    let botonPapel=document.getElementById('papel');
    let botonTijeras=document.getElementById('tijeras');
    botonPiedra.addEventListener("click", ()=>{
        jugada('piedra');});
    botonPapel.addEventListener("click", ()=>{
        jugada('papel');});
    botonTijeras.addEventListener("click", ()=>{
        jugada('tijeras');});
})

function obtenerJugadaComputadora() {//Elige la computadora
    return Math.floor(Math.random() * 3);//número aleatorio entre el 0 y 2
}

function determinarGanador(compu,jugador) {//compara al jugador y la computadora y determina quien gana la jugada
    let ganador;
    
    if (((compu===0)&&(jugador===2))||((compu===1)&&(jugador===0))||((compu===2)&&(jugador===1))) {
            ganador="Ganó la Computadora!";
            ganadas_compu+=1;
            
        } else if ((compu===jugador)) {
            ganador="empate, sigue jugando";
        } else {
            ganador="Ganó "+nombre.value;
            ganadas_jugador+=1;
           
        }
        document.getElementById("gana_compu").innerHTML=ganadas_compu;//muestro conteo de jugadas ganadas de cada uno
        document.getElementById("gana_jugador").innerHTML=ganadas_jugador;
    if (ganadas_compu==3) {
        document.getElementById("gana_compu").innerHTML="3";
        alert ("Perdiste!!! La Compu alcanzó los 3 aciertos.");
        location. reload();//reseteo la página para comenzar de nuevo
    } else if (ganadas_jugador==3) {
        document.getElementById("gana_jugador").innerHTML="3";
        alert (nombre.value+"! Alcanzaste los 3 aciertos, GANASTE!!!");
        location. reload()//reseteo la página para comenzar de nuevo
    }
    
    return ganador;
}

function jugada(palo) {//Transformo el id de lo que eligió el jugador para poder comparar con la compu
    let usuario=0;
    if ((palo==="piedra")) {
        usuario=0;
    } else if (palo==="papel") {
        usuario=1;
    } else if (palo==="tijeras") {
        usuario=2;
    }
    
    let compu= obtenerJugadaComputadora();
    let ganador=determinarGanador(compu,usuario);
    document.getElementById('resul_js').innerHTML = "Resultado: "+ganador;
    
}
function reseteo() {
    return location.reload();
}
