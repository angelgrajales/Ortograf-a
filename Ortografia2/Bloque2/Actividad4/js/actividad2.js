
var ejercicios = [
    'c<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>biar',
    '<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />volver',
    '<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>vierno',
    'dici<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />bre',
    'c<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>venio',
    'bug<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />vilia',
    't<input id="palabra_7" class="in_text border border-success" maxlength="3" disabled/>bre',
    'c<input id="palabra_8" class="in_text border border-success" maxlength="3" />binación',
    'al<input id="palabra_9" class="in_text border border-success" maxlength="3" />brar',
    '<input id="palabra_10" class="in_text border border-success" maxlength="3" />verso',

    '<input id="palabra_11" class="in_text border border-success" maxlength="3" disabled/>bral',
    'esc<input id="palabra_12" class="in_text border border-success" maxlength="3" disabled />brar',
    '<input id="palabra_13" class="in_text border border-success" maxlength="3" disabled/>vitación',
    '<input id="palabra_14" class="in_text border border-success" maxlength="3" />vase',
    '<input id="palabra_15" class="in_text border border-success" maxlength="3" />bar',


    's<input id="palabra_16" class="in_text border border-success" maxlength="3" disabled/>bolo',
    'c<input id="palabra_17" class="in_text border border-success" maxlength="3" disabled />vencer',
    'c<input id="palabra_18" class="in_text border border-success" maxlength="3" disabled/>bate',
    '<input id="palabra_19" class="in_text border border-success" maxlength="3" />cargo',
    'mar<input id="palabra_20" class="in_text border border-success" maxlength="3" />ba',
    '<input id="palabra_21" class="in_text border border-success" maxlength="3" />bulancia',

    'c<input id="palabra_22" class="in_text border border-success" maxlength="3" disabled/>vento',
    '<input id="palabra_23" class="in_text border border-success" maxlength="3" disabled />visible',
    '<input id="palabra_24" class="in_text border border-success" maxlength="3" disabled/>bilical',
    '<input id="palabra_25" class="in_text border border-success" maxlength="3" />budo',
    'al<input id="palabra_26" class="in_text border border-success" maxlength="3" />brar'



];
var palabras = ['cambiar', 'envolver', 'invierno', 'diciembre', 'convenio', 'buganvilia', 'timbre', 'combinación', 'alumbrar', 'anverso',
    'umbral', 'escombrar', 'invitación', 'envase', 'ambar', 'simbolo', 'convencer', 'combate', 'encargo', 'marimba', 'ambulancia', 'convento', 'invisible', 'umbilical', 'embudo',
    'alumbrar'
];
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

    if (pos === 0 && valor === "am") {
        return true;
    } else if (pos === 1 && valor === "en") {
        return true;
    } else if (pos === 2 && valor === "in") {
        return true;
    } else if (pos === 3 && valor === "em") {
        return true;
    } else if (pos === 4 && valor === "on") {
        return true;
    } else if (pos === 5 && valor === "an") {
        return true;
    } else if (pos === 6 && valor === "im") {
        return true;
    } else if (pos === 7 && valor === "om") {
        return true;
    } else if (pos === 8 && valor === "um") {
        return true;
    } else if (pos === 9 && valor === "an") {
        return true;

    } else if (pos === 10 && valor === "um") {
        return true;
    } else if (pos === 11 && valor === "om") {
        return true;
    } else if (pos === 12 && valor === "in") {
        return true;
    } else if (pos === 13 && valor === "en") {
        return true;
    } else if (pos === 14 && valor === "am") {
        return true;
    } else if (pos === 15 && valor === "im") {
        return true;
    } else if (pos === 16 && valor === "on") {
        return true;
    } else if (pos === 17 && valor === "om") {
        return true;
    } else if (pos === 18 && valor === "en") {
        return true;


    } else if (pos === 19 && valor === "im") {
        return true;

    } else if (pos === 20 && valor === "am") {
        return true;
    } else if (pos === 21 && valor === "on") {
        return true;
    } else if (pos === 22 && valor === "in") {
        return true;


    } else if (pos === 23 && valor === "um") {
        return true;

    } else if (pos === 24 && valor === "em") {
        return true;
    } else if (pos === 25 && valor === "um") {
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



