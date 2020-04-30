
var ejercicios = ['A mamá le gusta cocinar <input id="palabra_1" class="in_text4 border border-success"/>.',
    'Mi tía Carmen colecciona <input id="palabra_2" class="in_text4 border border-success" />.',
    'María toca el <input id="palabra_3" class="in_text4 border border-success"/>.',
    'El perro <input id="palabra_4" class="in_text4 border border-success"/>la mano del niño',
    'Las <input id="palabra_5" class="in_text4 border border-success" /> dan cocos.',
    '<input id="palabra_6" class="in_text4 border border-success"/> perjudica la salud.',
    'Se debe de <input id="palabra_7" class="in_text4 border border-success"/> correctamente la comida.',
    'Me encanta el pan con <input id="palabra_8" class="in_text4 border border-success"/>.',
    'Me gusta la playa y el <input id="palabra_9" class="in_text4 border border-success"/>.',
    'En las conchas de mar, viven las <input id="palabra_10" class="in_text4 border border-success"/>.'];
var palabras = ['pescado', 'copas', 'pandero', 'lame', 'palmeras', 'fumar', 'masticar', 'mermelada', 'mar', 'perlas'];
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



    if (pos === 0 && valor === "pescado") {
        return true;
    } else if (pos === 1 && valor === "copas") {
        return true;
    } else if (pos === 2 && valor === "pandero") {
        return true;
    } else if (pos === 3 && valor === "lame") {
        return true;
    } else if (pos === 4 && valor === "palmeras") {
        return true;
    } else if (pos === 5 && valor === "fumar") {
        return true;
    } else if (pos === 6 && valor === "masticar") {
        return true;
    } else if (pos === 7 && valor === "mermelada") {
        return true;
    } else if (pos === 8 && valor === "mar") {
        return true;
    } else if (pos === 9 && valor === "perlas") {
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








