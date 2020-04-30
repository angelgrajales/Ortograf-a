
var ejercicios = ['ca<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>eón',
    'chi<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />ancé',
    'alfo<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>ra',
    'a<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />ulancia',
    'ca<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>io',
    'derru<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />e',
     'fra<input id="palabra_7" class="in_text border border-success" maxlength="3" disabled/>uesa',
    'Lo<input id="palabra_8" class="in_text border border-success" maxlength="3" />riz',
    'co<input id="palabra_9" class="in_text border border-success" maxlength="3" />render',
    'e<input id="palabra_10" class="in_text border border-success" maxlength="3" />aque',
    'li<input id="palabra_11" class="in_text border border-success" maxlength="3" disabled/>iador',
    'ra<input id="palabra_12" class="in_text border border-success" maxlength="3" disabled/>a',
    'si<input id="palabra_13" class="in_text border border-success" maxlength="3" disabled/>atía',
    'tro<input id="palabra_14" class="in_text border border-success" maxlength="3" disabled/>a',
    'li<input id="palabra_15" class="in_text border border-success" maxlength="3" disabled/>ieza'
   
   







];
var palabras = ['campeón', 'chimpancé', 'alfombra', 'ambulancia', 'cambio', 'derrumbe', 'frambuesa', 'lombriz', 'comprender', 'empaque', 'limpiador', 'rampa', 'simpatía', 'trompa', 'limpieza'];
var usados = [];
var id_boton = "";
var pos = -1;
var resultado;
$(document).ready(function () {

    $(".opcion").click(function () {
        id_boton = $(this).attr("id");
        resultado = califica(id_boton);
        if (resultado === true) {
            bien(id_boton);
        } else {
            mal(id_boton);
        }
    })
})
function escribe_palabra() {
    pos = aleatorio();
    $("#cont_palabra").empty();
    $('#cont_palabra').html(ejercicios[pos]);
}

function aleatorio() {
    num = parseInt(Math.random() * (ejercicios.length));
    while ($.inArray(num, usados) !== -1) {
        num = parseInt(Math.random() * (ejercicios.length));
        console.log(num);
    }

    return num;
}

function califica(boton) {
    valor = $("#" + boton).text();

    if (pos === 0 && valor === "mp") {
        return true;
    } else if (pos === 1 && valor === "mp") {
        return true;
    } else if (pos === 2 && valor === "mb") {
        return true;
    } else if (pos === 3 && valor === "mb") {
        return true;
    } else if (pos === 4 && valor === "mb") {
        return true;
    } else if (pos === 5 && valor === "mb") {
        return true;
    } else if (pos === 6 && valor === "mb") {
        return true;
    } else if (pos === 7 && valor === "mb") {
        return true;
    } else if (pos === 8 && valor === "mp") {
        return true;
    } else if (pos === 9 && valor === "mp") {
        return true;

    } else if (pos === 10 && valor === "mp") {
        return true;
    } else if (pos === 11 && valor === "mp") {
        return true;
    } else if (pos === 12 && valor === "mp") {
        return true;
    } else if (pos === 13 && valor === "mp") {
        return true;
        
        
         } else if (pos === 14 && valor === "mp") {
        return true;
 
    } else {
        return false;
    }

}


function bien(boton) {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).val($("#" + boton).text());
    $(id_contenedor).css('background-color', '#7bffa5');
    usados.push(pos);
    muestra_completa();
    cambia_imagen();
    if (usados.length === ejercicios.length) {
        $('#modalExcelente').modal('show');
    } else {
        setTimeout('escribe_palabra()', 1500);
    }
}

function mal(boton) {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).val($("#" + boton).text());
    $(id_contenedor).css('background-color', '#F83939');
}

function muestra_completa() {
    $('#palabra_completa').css('visibility', 'visible');
    $('#palabra_completa').
            append($('<button>').
                    attr("class", "btn btn-light").
                    attr("type", "button").
                    attr("value", palabras[pos]).
                    text(palabras[pos])
                    );
}

function cambia_imagen() {
    var ruta = "img/b1_a2/img" + (usados.length) + ".png";
    $('#imagen').attr('src', ruta);
}



