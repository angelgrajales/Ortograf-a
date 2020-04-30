
var ejercicios = ['h y t c a o e   <input id="palabra_1" class="in_text4 border border-success"/>',
    'D s y n e a u o  <input id="palabra_2" class="in_text4 border border-success"/>',
    'i f u e t n n l y e  <input id="palabra_3" class="in_text4 border border-success"/>',
    'o a a y c l   <input id="palabra_4" class="in_text4 border border-success"/>',
    'm y r a o <input id="palabra_5" class="in_text4 border border-success" />',
    'S a u y <input id="palabra_6" class="in_text4 border border-success"/>',
    'o o a y r r <input id="palabra_7" class="in_text4 border border-success" />',
    'a y o b  <input id="palabra_8" class="in_text4 border border-success"  />',
    's ú y a l m a u c  <input id="palabra_9" class="in_text4 border border-success" />',
    'y a d u a <input id="palabra_10" class="in_text4 border border-success"  />'];
var palabras = ['chayote', 'desayuno', 'influyente', 'lacayo', 'mayor', 'suya', 'arroyo', 'boya', 'mayúscula', 'aydua'];
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



    if (pos === 0 && valor === "chayote") {
        return true;
    } else if (pos === 1 && valor === "desayuno") {
        return true;
    } else if (pos === 2 && valor === "influyente") {
        return true;
    } else if (pos === 3 && valor === "lacayo") {
        return true;
    } else if (pos === 4 && valor === "mayor") {
        return true;
    } else if (pos === 5 && valor === "suya") {
        return true;
    } else if (pos === 6 && valor === "arroyo") {
        return true;
    } else if (pos === 7 && valor === "boya") {
        return true;
    } else if (pos === 8 && valor === "mayúscula") {
        return true;
    } else if (pos === 9 && valor === "ayuda") {
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









