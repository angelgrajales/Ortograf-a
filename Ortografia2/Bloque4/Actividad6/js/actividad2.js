
var ejercicios = [
    '<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>var',
    'ceri<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />',
    'argo<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>',
    'barqui<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />',
    'ga<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>to',
    'cue<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />',
    'fa<input id="palabra_7" class="in_text border border-success" maxlength="3" disabled/>do',
     'bi<input id="palabra_8" class="in_text border border-success" maxlength="3" disabled/>te',
    '<input id="palabra_9" class="in_text border border-success" maxlength="3" />no',
    'colmi<input id="palabra_10" class="in_text border border-success" maxlength="3" />do',
    '<input id="palabra_11" class="in_text border border-success" maxlength="3" />mar',

    'boqui<input id="palabra_12" class="in_text border border-success" maxlength="3" disabled/>',
    'caba<input id="palabra_13" class="in_text border border-success" maxlength="3" disabled />ro'
    

];
var palabras = ['llevar', 'cerillo', 'argolla', 'barquillo', 'gallito', 'cuello', 'fallido', 'billete', 'lleno', 'colmilludo',
    'llamar', 'boquilla', 'caballero'
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

    if (pos === 0 && valor === "lle") {
        return true;
    } else if (pos === 1 && valor === "llo") {
        return true;
    } else if (pos === 2 && valor === "lla") {
        return true;
    } else if (pos === 3 && valor === "llo") {
        return true;
    } else if (pos === 4 && valor === "lli") {
        return true;
    } else if (pos === 5 && valor === "llo") {
        return true;
    } else if (pos === 6 && valor === "lli") {
        return true;
    } else if (pos === 7 && valor === "lle") {
        return true;
    } else if (pos === 8 && valor === "lle") {
        return true;
    } else if (pos === 9 && valor === "llu") {
        return true;

    } else if (pos === 10 && valor === "lla") {
        return true;
    } else if (pos === 11 && valor === "lla") {
        return true;
   
 } else if (pos === 12 && valor === "lle") {
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



