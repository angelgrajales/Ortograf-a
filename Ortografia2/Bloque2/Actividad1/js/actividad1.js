
var ejercicios = [' coser <input id="palabra_1" class="in_text4 border border-success"/>',
    ' idioma <input id="palabra_2" class="in_text4 border border-success" />',
    ' deformación <input id="palabra_3" class="in_text4 border border-success"/>',
    ' telescopico <input id="palabra_4" class="in_text4 border border-success"/>',
    ' entristecimiento <input id="palabra_5" class="in_text4 border border-success" />',
    ' viernes <input id="palabra_6" class="in_text4 border border-success"/>',
    ' músculo <input id="palabra_7" class="in_text4 border border-success"  />',
    ' molinillo <input id="palabra_8" class="in_text4 border border-success"  />',
    ' expresionismo <input id="palabra_9" class="in_text4 border border-success"  />',
    ' vicealmirante <input id="palabra_10" class="in_text4 border border-success"  />'];

var palabras = ['co-ser', 'i-dio-ma', 'de-for-ma-ción', 'te-les-co-pi-co', 'en-tris-te-ci-mien-to', 'vi-er-nes', 'mús-cu-lo', 'mo-li-ni-llo', 'ex-pre-sio-nis-mo', 'vi-ce-al-mi-ran-te'];
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
    valor = valor.toLowerCase().replace(/\s+/g, '');

    if (pos === 0 && valor === "co-ser") {
        return true;
    } else if (pos === 1 && valor === "i-dio-ma") {
        return true;
    } else if (pos === 2 && valor === "de-for-ma-ción") {
        return true;
    } else if (pos === 3 && valor === "te-les-co-pi-co") {
        return true;
    } else if (pos === 4 && valor === "en-tris-te-ci-mien-to") {
        return true;
    } else if (pos === 5 && valor === "vi-er-nes") {
        return true;
    } else if (pos === 6 && valor === "mús-cu-lo") {
        return true;
    } else if (pos === 7 && valor === "mo-li-ni-llo") {
        return true;
    } else if (pos === 8 && valor === "ex-pre-sio-nis-mo") {
        return true;
    } else if (pos === 9 && valor === "vi-ce-al-mi-ran-te") {
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









