
var ejercicios = ['<img src="img/b3_a16/gorila.png" alt="gorila" class="img_peqe"/> <input id="palabra_1" class="in_text4 border border-success"/>',
    '<img src="img/b3_a16/estomago.png" alt="estomago" class="img_peqe"/> <input id="palabra_2" class="in_text4 border border-success" />',
    '<img src="img/b3_a16/gusano.png" alt="gusano" class="img_peqe"/> <input id="palabra_3" class="in_text4 border border-success"/>',
    '<img src="img/b3_a16/dragon.png" alt="dragon" class="img_peqe"/> <input id="palabra_4" class="in_text4 border border-success"/>',
    '<img src="img/b3_a16/ganar.png" alt="ganar" class="img_peqe"/> <input id="palabra_5" class="in_text4 border border-success" />',
    '<img src="img/b3_a16/aguja.png" alt="aguja" class="img_peqe"/> <input id="palabra_6" class="in_text4 border border-success"/>',
    '<img src="img/b3_a16/ganso.png" alt="ganso" class="img_peqe"/> <input id="palabra_7" class="in_text4 border border-success"  />',
    '<img src="img/b3_a16/bigote.png" alt="bigote" class="img_peqe"/> <input id="palabra_8" class="in_text4 border border-success"  />',
    '<img src="img/b3_a16/abogado.png" alt="abogado" class="img_peqe"/> <input id="palabra_9" class="in_text4 border border-success"  />',
    '<img src="img/b3_a16/aguantar.png" alt="aguantar" class="img_peqe"/> <input id="palabra_10" class="in_text4 border border-success"  />'];
var palabras = ['gorila', 'estómago', 'gusano', 'dragón', 'ganar', 'aguja', 'ganso', 'bigote', 'abogado', 'aguantar'];
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



    if (pos === 0 && valor === "gorila") {
        return true;
    } else if (pos === 1 && valor === "estómago") {
        return true;
    } else if (pos === 2 && valor === "gusano") {
        return true;
    } else if (pos === 3 && valor === "dragón") {
        return true;
    } else if (pos === 4 && valor === "ganar") {
        return true;
    } else if (pos === 5 && valor === "aguja") {
        return true;
    } else if (pos === 6 && valor === "ganso") {
        return true;
    } else if (pos === 7 && valor === "bigote") {
        return true;
    } else if (pos === 8 && valor === "abogado") {
        return true;
    } else if (pos === 9 && valor === "aguantar") {
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









