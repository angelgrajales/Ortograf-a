
var ejercicios = [' <input id="palabra_1" class="in_text4 border border-success"/> acilar ', ' <input id="palabra_2" class="in_text4 border border-success" /> alcón', '<input id="palabra_3" class="in_text4 border border-success"/> agabundo',
    ' <input id="palabra_4" class="in_text4 border border-success"/> urla', ' <input id="palabra_5" class="in_text4 border border-success" /> enir',
    'No <input id="palabra_6" class="in_text4 border border-success"/> leza', 'Na <input id="palabra_7" class="in_text4 border border-success"  /> e', 'Saluda <input id="palabra_8" class="in_text4 border border-success" /> le',
    'Relie <input id="palabra_9" class="in_text4 border border-success" /> e', 'Al <input id="palabra_10" class="in_text4 border border-success" /> ergue',  ' culti <input id="palabra_11" class="in_text4 border border-success" /> o',
    'ára <input id="palabra_12" class="in_text4 border border-success" /> e', 'Her <input id="palabra_13" class="in_text4 border border-success" /> ir', ' Am <input id="palabra_14" class="in_text4 border border-success" /> iente',
    'Ci <input id="palabra_15" class="in_text4 border border-success"/> ilidad ', '<input id="palabra_16" class="in_text4 border border-success" /> alón', 'Festi <input id="palabra_17" class="in_text4 border border-success"/> o', ' <input id="palabra_18" class="in_text4 border border-success"/> inario ', 
    'Ser <input id="palabra_19" class="in_text4 border border-success" /> ir',' <input id="palabra_20" class="in_text4 border border-success"/> oletín', 'In <input id="palabra_21" class="in_text4 border border-success"  /> ento', 'Em <input id="palabra_22" class="in_text4 border border-success" /> arcación ',
    'Octa <input id="palabra_23" class="in_text4 border border-success" /> o', 'Cu <input id="palabra_24" class="in_text4 border border-success" /> eta', ' Ad <input id="palabra_25" class="in_text4 border border-success" /> ersario',
    '<input id="palabra_26" class="in_text4 border border-success" /> asura', '<input id="palabra_27" class="in_text4 border border-success" /> ocal', ' La <input id="palabra_28" class="in_text4 border border-success" /> oratorio',
    '<input id="palabra_29" class="in_text4 border border-success" /> olumen', '<input id="palabra_30" class="in_text4 border border-success" /> andeja'];
var palabras = ['v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b', 'v', 'b'];
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




function califica() {
    valor = $("#palabra_" + (pos + 1)).val();
    valor = valor.toLowerCase();



    if (pos === 0 && valor === "v") {
        return true;
    } else if (pos === 1 && valor === "b") {
        return true;
    } else if (pos === 2 && valor === "v") {
        return true;
    } else if (pos === 3 && valor === "b") {
        return true;
    } else if (pos === 4 && valor === "v") {
        return true;
    } else if (pos === 5 && valor === "b") {
        return true;
    } else if (pos === 6 && valor === "v") {
        return true;
    } else if (pos === 7 && valor === "b") {
        return true;
    } else if (pos === 8 && valor === "v") {
        return true;
    } else if (pos === 9 && valor === "b") {
        return true;
    } else if (pos === 10 && valor === "v") {
        return true;
    } else if (pos === 11 && valor === "b") {
        return true;
    } else if (pos === 12 && valor === "v") {
        return true;
    } else if (pos === 13 && valor === "b") {
        return true;
    } else if (pos === 14 && valor === "v") {
        return true;
    } else if (pos === 15 && valor === "b") {
        return true;
    } else if (pos === 16 && valor === "v") {
        return true;
    } else if (pos === 17 && valor === "b") {
        return true;
    } else if (pos === 18 && valor === "v") {
        return true;
    } else if (pos === 19 && valor === "b") {
        return true;
    } else if (pos === 20 && valor === "v") {
        return true;
    } else if (pos === 21 && valor === "b") {
        return true;
    } else if (pos === 22 && valor === "v") {
        return true;
    } else if (pos === 23 && valor === "b") {
        return true;
    } else if (pos === 24 && valor === "v") {
        return true;
    } else if (pos === 25 && valor === "b") {
        return true;
    } else if (pos === 26 && valor === "v") {
        return true;
    } else if (pos === 27 && valor === "b") {
        return true;
    } else if (pos === 28 && valor === "v") {
        return true;
    } else if (pos === 29 && valor === "b") {
        return true;
    }
    else {
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

function muestra_completa() {

    var usados_local = [];
    var pos_local = -1;

    while (usados_local.length <= palabras.length)
    {
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







