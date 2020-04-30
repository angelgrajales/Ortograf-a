
var ejercicios = ['Las gelatinas quedaron <input  id="palabra_1" class="in_text4 border border-success"/> desde ayer..',
    ' Tú <input id="palabra_2" class="in_text4 border border-success"/> siempre la basura en el bote.',
    ' Yo he  <input id="palabra_3" class="in_text4 border border-success"/>, del verbo hacer, va con h.',
    'El periodista relató los   <input id="palabra_4" class="in_text4 border border-success"/> del evento.',
    'El a veces  <input id="palabra_5" class="in_text4 border border-success"/> de menos a su novia en la fiesta.',
    'Claudia le  <input id="palabra_6" class="in_text4 border border-success"/> crema a la gelatina todos los días.',
    'El disfraz es  <input id="palabra_7" class="in_text4 border border-success"/> en casa.',
    'Yo le  <input id="palabra_8" class="in_text4 border border-success" />, del verbo echar va sin h.',
    'Juan  <input id="palabra_9" class="in_text4 border border-success"/> el disfraz a la maleta desde hace rato.',
    'Yo siempre   <input id="palabra_10" class="in_text4 border border-success"/> los corchos en un recipiente para coleccionarlos.'];
var palabras = ['hechas', 'echas', 'hecho', 'hechos', 'echó', 'echa', 'hecho', 'echo', 'echó', 'echo'];
var usados = [];
var id_boton = "";
var pos = -1;
var resultado;

$(document).ready(function () {

    $("#revisar").click(function () {
        resultado = califica();
        if (resultado === true) {
            bien();
        } else {
            mal();
        }
    })
})


function inicio() {

    escribe_palabra();
    muestra_completa();
}

function escribe_palabra() {
    pos = aleatorio();
    $("#cont_palabra").empty();
    $('#cont_palabra').html(ejercicios[pos]);
}

function aleatorio() {
    num = parseInt(Math.random() * (ejercicios.length));//obtiene un numero aleatorio

    while (usados.includes(num) === true) {//Mientras el numero este en la lista
        num = parseInt(Math.random() * (ejercicios.length));//sigue buscando mas numeros        
    }
    return num;
}


function califica() {
    valor = $("#palabra_" + (pos + 1)).val();
    valor = valor.toLowerCase();

    'hechas', 'echas', 'hecho', 'hechos', 'echó', 'echa', 'hecho', 'echo', 'echó', 'echo'

    if (pos === 0 && valor === "hechas") {
        return true;
    } else if (pos === 1 && valor === "echas") {
        return true;
    } else if (pos === 2 && valor === "hecho") {
        return true;
    } else if (pos === 3 && valor === "hechos") {
        return true;
    } else if (pos === 4 && valor === "echó") {
        return true;
    } else if (pos === 5 && valor === "echa") {
        return true;
    } else if (pos === 6 && valor === "hecho") {
        return true;
    } else if (pos === 7 && valor === "echo") {
        return true;
    } else if (pos === 8 && valor === "echó") {
        return true;
    } else if (pos === 9 && valor === "echo") {
        return true;
    }
    else {
        return false;
    }

}


function bien() {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).css('background-color', '#7bffa5');
    usados.push(pos);
    if (usados.length === ejercicios.length) {
        $('#modalExcelente').modal('show');
    } else {
        setTimeout('escribe_palabra()', 1500);
    }
}

function mal() {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).css('background-color', '#F83939');
}

function muestra_completa() {

    var usados_local = [];
    var pos_local = -1;

    while (usados_local.length <= palabras.length) {
        pos_local = aleatorio_puro();//obtengo un numero al azar
        if (usados_local.includes(pos_local) !== true) {
            $('#palabra_completa').css('visibility', 'visible');
            $('#palabra_completa').
                append($('<button>').
                    attr("class", "btn btn-light").
                    attr("type", "button").
                    attr("value", palabras[pos_local]).
                    text(palabras[pos_local])
                );
            usados_local.push(pos_local);
        }
    }
}








