
var ejercicios = ['<tr id="fila_1"><td id="col_1_1">Proteger</td><td id="col_1_2"></td>',
    '<tr id="fila_2"><td id="col_2_1">Producir</td><td id="col_2_2"></td>',
    '<tr id="fila_3"><td id="col_3_1">Proyectar</td><td id="col_3_2"></td>',
    '<tr id="fila_4"><td id="col_4_1">Distraer</td><td id="col_4_2"></td>',
     '<tr id="fila_5"><td id="col_5_1">Traducir</td><td id="col_5_2"></td>',
    '<tr id="fila_6"><td id="col_6_1">Accionar</td><td id="col_6_2"></td>',
    '<tr id="fila_7"><td id="col_7_1">Redactar</td><td id="col_7_2"></td>',
    '<tr id="fila_8"><td id="col_8_1">Distraer</td><td id="col_8_2"></td>',
     '<tr id="fila_9"><td id="col_9_1">Accidentar</td><td id="col_9_2"></td>',
    '<tr id="fila_10"><td id="col_10_1">Infraccionar</td><td id="col_10_2"></td>',
    '<tr id="fila_11"><td id="col_11_1">Coleccionar</td><td id="col_11_2"></td>'
];

var usados = [];
var id_boton = "";
var pos = -1;
var columna = 2;
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
    });
});
function escribe_palabra() {
    pos = aleatorio();

    $("#tabla_principal").empty();
    $('#tabla_principal').html(ejercicios[pos]);
}

function aleatorio() {
    var num = parseInt(Math.random() * (ejercicios.length));
    while ($.inArray(num, usados) !== -1) {
        num = parseInt(Math.random() * (ejercicios.length));
    }
    return num;
}

function califica(boton) {
     valor = $("#" + boton).text();
    if (pos === 0 && (valor === "Protección")) {
        return true;
    } else if (pos === 1 && (valor === "Producción")) {
        return true;
    } else if (pos === 2 && (valor === "Proyección")) {
        return true;
    } else if (pos === 3 && (valor === "Distracción")) {
        return true;
    } else if (pos === 4 && (valor === "Traducción")) {
        return true;
    } else if (pos === 5 && (valor === "Acción")) {
        return true;
    } else if (pos === 6 && (valor === "Redacción")) {
        return true;
    } else if (pos === 7 && (valor === "Distracción")) {
        return true;
    } else if (pos === 8 && (valor === "Accidente")) {
        return true;
    } else if (pos === 9 && (valor === "Infracción")) {
        return true;
    } else if (pos === 10 && (valor === "Colección")) {
        return true;
    }
  

}


function bien(boton) {
    var id_columna = "#col_" + (pos + 1) + "_" + columna;
    $(id_columna).text($("#" + boton).text());
    $(id_columna).css('background-color', '#7bffa5');
    $("#" + boton).remove();


    if (columna === 2) {
        usados.push(pos);
        muestra_completa();

        if (usados.length === ejercicios.length) {
            $('#modalExcelente').modal('show');
        } else {
            setTimeout('escribe_palabra()', 1500);
        }
        columna = 2;
        return;
    }

    columna++;

}

function mal(boton) {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).val($("#" + boton).text());
    $(id_contenedor).css('background-color', '#F83939');
}

function muestra_completa() {
    $('#palabra_completa').css('visibility', 'visible');
    var nodo = document.getElementById("fila_" + (pos + 1));
    var nodo_copia = nodo.cloneNode(true);
    document.getElementById("tabla_secundaria").appendChild(nodo_copia);

}

