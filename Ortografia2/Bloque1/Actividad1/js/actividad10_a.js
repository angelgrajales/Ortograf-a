
var ejercicios = ['Mi mamá tuvo que comprar una<input id="palabra_1" class="in_text4 border border-success"/>.',
    'El <input id="palabra_2" class="in_text4 border border-success" /> tiene unas garras muy filosas.',
    'Seguiré colaborando como <input id="palabra_3" class="in_text4 border border-success"/>.',
    'Para cocinar los <input id="palabra_4" class="in_text4 border border-success" /> se deben poner al fuego.'];


var palabras = ['manguera', 'guepardo', 'monaguillo', 'guisantes'];


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


    if (pos === 0 && valor === "manguera") {
        return true;
    } else if (pos === 1 && valor === "guepardo") {
        return true;
    } else if (pos === 2 && valor === "monaguillo") {
        return true;
    } else if (pos === 3 && valor === "guisantes") {
        return true;
    } else {
        return false;
    }

}


function bien() {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).css('background-color', '#7bffa5');
    //cambia_imagen();
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
/*
function cambia_imagen() {
    var ruta = "img/b1_a2/img" + (pos + 1) + ".png";
    $('#imagen').attr('src', ruta);


}*/







