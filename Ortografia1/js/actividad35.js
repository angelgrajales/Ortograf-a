
var ejercicios = ['La semana siguiente será mi <input id="palabra_1" class="in_text4 border border-success"/>.',
    'El salón de clases es  <input id="palabra_2" class="in_text4 border border-success" />.',
    'Es correcto jugar sin hacer <input id="palabra_3" class="in_text4 border border-success"/>.',
    'Beto se avienta del <input id="palabra_4" class="in_text4 border border-success"/>en la clase de natación.',
    'Cuando voy a la escuela me levanto <input id="palabra_5" class="in_text4 border border-success" />.',
    '<input id="palabra_6" class="in_text4 border border-success"/> quiere decir difícil.',
    'Luis y Ana irán de <input id="palabra_7" class="in_text4 border border-success"/>.',
    '<input id="palabra_8" class="in_text4 border border-success"/> quiere decir sencillo.',
    'Con chicle jugamos a hacer <input id="palabra_9" class="in_text4 border border-success"/>.',
    'La <input id="palabra_10" class="in_text4 border border-success"/> es instrumento musical.'];


var palabras = ['compleaños', 'amplio', 'trampas', 'trampolín', 'temprano', 'complicado', 'campamento', 'simple', 'bombas', 'trompeta'];
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


function aleatorio_puro() {
    var numero;
    numero = parseInt(Math.random() * (ejercicios.length));//obtiene un numero aleatorio  
    return numero;
}

function califica() {
    valor = $("#palabra_" + (pos + 1)).val();
    valor = valor.toLowerCase();



    if (pos === 0 && valor === "cumpleaños") {
        return true;
    } else if (pos === 1 && valor === "amplio") {
        return true;
    } else if (pos === 2 && valor === "trampas") {
        return true;
    } else if (pos === 3 && valor === "trampolín") {
        return true;
    } else if (pos === 4 && valor === "temprano") {
        return true;
    } else if (pos === 5 && valor === "complicado") {
        return true;
    } else if (pos === 6 && valor === "campamento") {
        return true;
    } else if (pos === 7 && valor === "simple") {
        return true;
    } else if (pos === 8 && valor === "bombas") {
        return true;
    } else if (pos === 9 && valor === "trompeta") {
        return true;
    } else {
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








