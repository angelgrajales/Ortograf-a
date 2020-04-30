
var ejercicios = ['<tr id="fila_1"><td id="col_1_1">Llenar</td><td id="col_1_2">llena</td><td id="col_1_3"></td>',
    '<tr id="fila_2"><td id="col_2_1">Beber</td><td id="col_2_2">bebe</td><td id="col_2_3"></td>',
    '<tr id="fila_3"><td id="col_3_1">Escribir</td><td id="col_3_2">escribe</td><td id="col_3_3"></td>',
    '<tr id="fila_4"><td id="col_4_1">Caminar</td><td id="col_4_2">camina</td><td id="col_4_3"></td>',
     '<tr id="fila_5"><td id="col_5_1">Resolver</td><td id="col_5_2">resuelve</td><td id="col_5_3"></td>',
    '<tr id="fila_6"><td id="col_6_1">Cantar</td><td id="col_6_2">canta</td><td id="col_6_3"></td>',
    '<tr id="fila_7"><td id="col_7_1">Leer</td><td id="col_7_2"></td>lee<td id="col_7_3"></td>',
    '<tr id="fila_8"><td id="col_8_1">Vaciar</td><td id="col_8_2">vacia</td><td id="col_8_3"></td>',
     '<tr id="fila_9"><td id="col_9_1">Vivir</td><td id="col_9_2">vive</td><td id="col_9_3"></td>',
    '<tr id="fila_10"><td id="col_10_1">Ser</td><td id="col_10_2">se</td><td id="col_10_3"></td>',
    '<tr id="fila_11"><td id="col_11_1">Colgar</td><td id="col_11_2">cuelga</td><td id="col_11_3"></td>'
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
    if (pos === 0 && (valor === "llenen"|| valor === "llene")) {
        return true;
    } else if (pos === 1 && (valor === "beban"|| valor === "bebe")) {
        return true;
    } else if (pos === 2 && (valor === "escriban"|| valor === "escriba")) {
        return true;
    } else if (pos === 3 && (valor === "caminen"|| valor === "camine")) {
        return true;
    } else if (pos === 4 && (valor === "resuelvan"|| valor === "resuelve")) {
        return true;
    } else if (pos === 5 && (valor === "canten"|| valor === "cante")) {
        return true;
    } else if (pos === 6 && (valor === "lean"|| valor === "lea")) {
        return true;
    } else if (pos === 7 && (valor === "vacien"|| valor === "vacie")) {
        return true;
    } else if (pos === 8 && (valor === "vivan"|| valor === "viva")) {
        return true;
    } else if (pos === 9 && (valor === "sean"|| valor === "sea")) {
        return true;
    } else if (pos === 10 && (valor === "cuelguen"|| valor === "cuelgue")) {
        return true;
    }
  

}


function bien(boton) {
    var id_columna = "#col_" + (pos + 1) + "_" + columna;
    $(id_columna).text($("#" + boton).text());
    $(id_columna).css('background-color', '#7bffa5');
    $("#" + boton).remove();


    if (columna === 3) {
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

