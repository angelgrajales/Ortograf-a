
var ejercicios = ['e hé ro <input id="palabra_1" class="in_text4 border border-success"/> ', 'nes to ho <input id="palabra_2" class="in_text4 border border-success" /> ', 'dad mil hu <input id="palabra_3" class="in_text4 border border-success"/> ',
    'bi to ha  <input id="palabra_4" class="in_text4 border border-success"/> ', 'ho res rro <input id="palabra_5" class="in_text4 border border-success" /> ',
    'za hi la <input id="palabra_6" class="in_text4 border border-success"/> ', 'ña ha za<input id="palabra_7" class="in_text4 border border-success"  /> ', 'ra le hi  <input id="palabra_8" class="in_text4 border border-success" /> ',
    'bi há les <input id="palabra_9" class="in_text4 border border-success" /> ', 'res no ho <input id="palabra_10" class="in_text4 border border-success" /> ', 'cien ha da <input id="palabra_11" class="in_text4 border border-success" /> ',
    'chi zo he <input id="palabra_12" class="in_text4 border border-success" /> ', 'he do la <input id="palabra_13" class="in_text4 border border-success" /> ', 'ron ha bla <input id="palabra_14" class="in_text4 border border-success" /> ',
    'her no ma <input id="palabra_15" class="in_text4 border border-success" /> ', 'do he ral <input id="palabra_16" class="in_text4 border border-success" /> ', 'bre ra hom <input id="palabra_17" class="in_text4 border border-success" /> '
    , 'la ho jue <input id="palabra_18" class="in_text4 border border-success" /> ', 'ci co ho <input id="palabra_19" class="in_text4 border border-success" /> ', 'to his ria <input id="palabra_20" class="in_text4 border border-success" /> '];
var palabras = ['héroe', 'honesto', 'humildad', 'habito', 'horrores', 'hilaza', 'hazaña', 'hilera', 'hábiles', 'honores', 'hacienda', 'hechizo', 'helado', 'hablaron', 'hermano', 'heraldo', 'hombrera', 'hojuela', 'hocico', 'historia'];
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



    if (pos === 0 && valor === "héroe") {
        return true;
    } else if (pos === 1 && valor === "honesto") {
        return true;
    } else if (pos === 2 && valor === "humildad") {
        return true;
    } else if (pos === 3 && valor === "habito") {
        return true;
    } else if (pos === 4 && valor === "horrores") {
        return true;
    } else if (pos === 5 && valor === "hilaza") {
        return true;
    } else if (pos === 6 && valor === "hazaña") {
        return true;
    } else if (pos === 7 && valor === "hilera") {
        return true;
    } else if (pos === 8 && valor === "hábiles") {
        return true;
    } else if (pos === 9 && valor === "honores") {
        return true;
    } else if (pos === 10 && valor === "hacienda") {
        return true;
    } else if (pos === 11 && valor === "hechizo") {
        return true;
    } else if (pos === 12 && valor === "helado") {
        return true;
    } else if (pos === 13 && valor === "hablaron") {
        return true;
    } else if (pos === 14 && valor === "hermano") {
        return true;
    } else if (pos === 15 && valor === "heraldo") {
        return true;
    } else if (pos === 16 && valor === "hombrera") {
        return true;
    } else if (pos === 17 && valor === "hojuela") {
        return true;
    } else if (pos === 18 && valor === "hocico") {
        return true;
    } else if (pos === 19 && valor === "historia") {
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

    while (usados_local.length <= palabras.length) {
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







