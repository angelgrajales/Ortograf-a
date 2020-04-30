var ejercicios = ['<tr id="fila_1"><td id="col_1_1">Hermano</td><td id="col_1_2"></td><td id="col_1_3"></td><td id="col_1_4"></td>',
    '<tr id="fila_2"><td id="col_2_1">Habitación </td><td id="col_2_2"></td><td id="col_2_3"></td><td id="col_2_4"></td>',
    '<tr id="fila_3"><td id="col_3_1">Hechizo</td><td id="col_3_2"></td><td id="col_3_3"></td><td id="col_3_4"></td>',
    '<tr id="fila_4"><td id="col_4_1">Hacienda</td><td id="col_4_2"></td><td id="col_4_3"></td><td id="col_4_4">',
    '<tr id="fila_5"><td id="col_5_1">Herencia</td><td id="col_5_2"></td><td id="col_5_3"></td><td id="col_5_4">',
    '<tr id="fila_6"><td id="col_6_1">Hilo</td><td id="col_6_2"></td><td id="col_6_3"></td><td id="col_6_4">'
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
    if (pos === 0 && (valor === "Hermanaban" || valor === "Hermanastro" || valor === "Hermandad")) {
        return true;
    } else if (pos === 1 && (valor === "Habitante" || valor === "Habitar" || valor === "Habitable")) {
        return true;
    } else if (pos === 2 && (valor === "Hechizar" || valor === "Hechicería" || valor === "Hechizado")) {
        return true;
    } else if (pos === 3 && (valor === "Hacendado" || valor === "Hacendar" || valor === "Hacendoso")) {
        return true;
    } else if (pos === 4 && (valor === "Herederos" || valor === "Hereditario" || valor === "Heredar")) {
        return true;
    } else if (pos === 5 && (valor === "Hilacho" || valor === "Hilar" || valor === "Deshilachado")) {
        return true;
    }

}


function bien(boton) {
    var id_columna = "#col_" + (pos + 1) + "_" + columna;
    $(id_columna).text($("#" + boton).text());
    $(id_columna).css('background-color', '#7bffa5');
    $("#" + boton).remove();


    if (columna === 4) {
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