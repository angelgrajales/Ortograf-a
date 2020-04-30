
var ejercicios = ['ca<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>',
    'pú<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />co',
    'esta<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>',
    'o<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />gación',
    'do<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>do',
    'nu<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />so',

    'sa<input id="palabra_7" class="in_text border border-success" maxlength="3" disabled/>',
    'dia<input id="palabra_8" class="in_text border border-success" maxlength="3" />to',
    'po<input id="palabra_9" class="in_text border border-success" maxlength="3" />ción',

    'tem<input id="palabra_10" class="in_text border border-success" maxlength="3" disabled />r',
    'construi<input id="palabra_11" class="in_text border border-success" maxlength="3" disabled/>',
    'voca<input id="palabra_12" class="in_text border border-success" maxlength="3" disabled />',
    'nu<input id="palabra_13" class="in_text border border-success" maxlength="3" disabled/>do',
    '<input id="palabra_14" class="in_text border border-success" maxlength="3" disabled />ndado',
    '<input id="palabra_15" class="in_text border border-success" maxlength="3" disabled/>queo',
    '<input id="palabra_16" class="in_text border border-success" maxlength="3" />sita',
    'dia<input id="palabra_17" class="in_text border border-success" maxlength="3" />ra',
    'ta<input id="palabra_18" class="in_text border border-success" maxlength="3" />lla',
    'divisi<input id="palabra_19" class="in_text border border-success" maxlength="3" />',
    'pu<input id="palabra_20" class="in_text border border-success" maxlength="3" />cidad'











];
var palabras = ['cable', 'público', 'estable', 'obligación', 'doblado', 'nubloso', 'sable', 'diablito', 'población', 'temblor', 'construible', 'vocablo',
    'nublado', 'blando', 'bloqueo', 'blusita', 'diablura', 'tablilla', 'divisible', 'publicidad'];
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

    if (pos === 0 && valor === "ble") {
        return true;
    } else if (pos === 1 && valor === "bli") {
        return true;

    } else if (pos === 2 && valor === "ble") {
        return true;

    } else if (pos === 3 && valor === "bli") {
        return true;
    } else if (pos === 4 && valor === "bla") {
        return true;
    } else if (pos === 5 && valor === "blo") {
        return true;
    } else if (pos === 6 && valor === "ble") {
        return true;
    } else if (pos === 7 && valor === "bli") {
        return true;
    } else if (pos === 8 && valor === "bla") {
        return true;
    } else if (pos === 9 && valor === "blo") {
        return true;
    } else if (pos === 10 && valor === "ble") {
        return true;

    } else if (pos === 11 && valor === "blo") {
        return true;
    } else if (pos === 12 && valor === "bla") {
        return true;
    } else if (pos === 13 && valor === "bla") {
        return true;
    } else if (pos === 14 && valor === "blo") {
        return true;
    } else if (pos === 15 && valor === "blu") {
        return true;
    } else if (pos === 16 && valor === "blu") {
        return true;
    } else if (pos === 17 && valor === "bli") {
        return true;
    } else if (pos === 18 && valor === "ble") {
        return true;
    } else if (pos === 19 && valor === "bli") {
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



