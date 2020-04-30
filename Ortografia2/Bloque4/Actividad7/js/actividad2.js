
var ejercicios = ['cebo<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>',
    'torni<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />',
    'fo<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>je',
    'caudi<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />',
    'cartonci<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>',
    'ta<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />r',
     'hebi<input id="palabra_7" class="in_text border border-success" maxlength="3" disabled/>',
    'gui<input id="palabra_8" class="in_text border border-success" maxlength="3" />tina',
    'cami<input id="palabra_9" class="in_text border border-success" maxlength="3" />',
    '<input id="palabra_10" class="in_text border border-success" maxlength="3" />gando',
     'ca<input id="palabra_11" class="in_text border border-success" maxlength="3" />jón',
    '<input id="palabra_12" class="in_text border border-success" maxlength="3" />vadero'
   
   
   







];
var palabras = ['cebolla', 'tornillo', 'follaje', 'caudillo', 'cartoncillo', 'taller', 'hebilla', 'guillotina', 'camilla', 'llegando','callejón', 'llevadero'];
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

    if (pos === 0 && valor === "lla") {
        return true;
    } else if (pos === 1 && valor === "llo") {
        return true;
    } else if (pos === 2 && valor === "lla") {
        return true;
    } else if (pos === 3 && valor === "llo") {
        return true;
    } else if (pos === 4 && valor === "llo") {
        return true;
    } else if (pos === 5 && valor === "lle") {
        return true;
    } else if (pos === 6 && valor === "lla") {
        return true;
    } else if (pos === 7 && valor === "llo") {
        return true;
    } else if (pos === 8 && valor === "lla") {
        return true;
    } else if (pos === 9 && valor === "lle") {
        return true;
 } else if (pos === 10 && valor === "lle") {
        return true;
    } else if (pos === 11 && valor === "lle") {
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



