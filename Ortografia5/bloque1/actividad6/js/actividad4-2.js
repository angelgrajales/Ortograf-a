
var ejercicios = ['Nu <input id="palabra_1" class="in_text4 border border-success"/>', ' Explos <input id="palabra_2" class="in_text4 border border-success" /> ', 'Negat <input id="palabra_3" class="in_text4 border border-success"/> ',
    'Su <input id="palabra_4" class="in_text4 border border-success"/>', 'Br <input id="palabra_5" class="in_text4 border border-success" />',
    'Reflex <input id="palabra_6" class="in_text4 border border-success"/> ', 'Exclamat <input id="palabra_7" class="in_text4 border border-success"  />', 'Oct <input id="palabra_8" class="in_text4 border border-success"  />',
    'Nu <input id="palabra_9" class="in_text4 border border-success"  />', 'Act <input id="palabra_10" class="in_text4 border border-success"/>',
    ' Inclus <input id="palabra_11" class="in_text4 border border-success"/>', ' Recreat <input id="palabra_12" class="in_text4 border border-success"/>', ' Gr <input id="palabra_13" class="in_text4 border border-success"/>',
     ' Llamat <input id="palabra_14" class="in_text4 border border-success"/>','Caritat <input id="palabra_15" class="in_text4 border border-success"/>', ' Afect <input id="palabra_16" class="in_text4 border border-success"/>',
    ' L <input id="palabra_17" class="in_text4 border border-success"/>', ' Doce <input id="palabra_18" class="in_text4 border border-success"/>', ' Provocat <input id="palabra_19" class="in_text4 border border-success"/>', 'Br <input id="palabra_20" class="in_text4 border border-success"/>',];
var palabras = ['Cohibir', 'Concebir', 'Prescribir', 'Describir', 'Convivir', 'Percibir', 'Hervir','servir','Vivir','Suscribir'];
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



    if (pos === 0 && valor === "evo") {
        return true;
    } else if (pos === 1 && valor === "ivo") {
        return true;
    } else if (pos === 2 && valor === "ivo") {
        return true;
    } else if (pos === 3 && valor === "ave") {
        return true;
    } else if (pos === 4 && valor === "avo") {
        return true;
    } else if (pos === 5 && valor === "ivo") {
        return true;
    } else if (pos === 6 && valor === "ivo") {
        return true;
    } else if (pos === 7 && valor === "avo") {
        return true;
    } else if (pos === 8 && valor === "evo") {
        return true;
    } else if (pos === 9 && valor === "ivo") {
        return true;
    }else if (pos === 10 && valor === "ivo") {
        return true;
    } else if (pos === 11 && valor === "ivo") {
        return true;
    } else if (pos === 12 && valor === "ave") {
        return true;
    } else if (pos === 13 && valor === "ivo") {
        return true;
    } else if (pos === 14 && valor === "ivo") {
        return true;
    } else if (pos === 15 && valor === "ivo") {
        return true;
    } else if (pos === 16 && valor === "ava") {
        return true;
    } else if (pos === 17 && valor === "avo") {
        return true;
    }else if (pos === 18 && valor === "ivo") {
        return true;
    } else if (pos === 19 && valor === "avo") {
        return true;
    
    } else {
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






