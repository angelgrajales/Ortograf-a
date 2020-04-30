
var ejercicios = ['<img src="img/14.jpg"alt="ábaco"/><br><br><input id="palabra_1" class="in_text4 border border-success"/><br>ábaco<br>',
    '<img src="img/15.jpg"alt="bandera"/> <br><br><input id="palabra_2" class="in_text4 border border-success"/> <br>bandera<br>',
    ' <img src="img/16.jpg" alt="cántaro"/><br><br><input id="palabra_3" class="in_text4 border border-success"/><br>cántaro<br>',
    '<img src="img/17.jpg" alt="corazón"/><br><br><input id="palabra_4" class="in_text4 border border-success"/><br>corazón<br>',
    '<img src="img/18.jpg"alt="cráneo"/><br><br><input id="palabra_5" class="in_text4 border border-success"/><br>cráneo<br>',
    '<img src="img/19.jpg"alt="cuaderno"/> <br><br><input id="palabra_6" class="in_text4 border border-success"/> <br>cuaderno<br>',
    '<img src="img/20.jpg"alt="ferrocarril"/> <br><br><input id="palabra_7" class="in_text4 border border-success" /><br>ferrocarril<br>',
    '<img src="img/21.jpg"alt="gallinero"/> <br><br><input id="palabra_8" class="in_text4 border border-success" /><br>gallinero<br>',
    '<img src="img/22.jpg"alt="licuadora"/> <br><br><input id="palabra_9" class="in_text4 border border-success" /><br>licuadora<br>'
    , '<img src="img/23.jpg" alt="patines"/><br><br> <input id="palabra_10" class="in_text4 border border-success" /><br>patines<br>'];
var palabras = ['á ba co', 'ban de ra', 'cán ta ro', 'co ra zón', 'cranéo', 'cua der no', 'fe rro ca rril', 'ga lli ne ro', 'li cua do ra', 'pa ti nes'];
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



    if (pos === 0 && valor === "á-ba-co") {
        return true;
    } else if (pos === 1 && valor === "ban-de-ra") {
        return true;
    } else if (pos === 2 && valor === "cán-ta-ro") {
        return true;
    } else if (pos === 3 && valor === "co-ra-zón") {
        return true;
    } else if (pos === 4 && valor === "cráneo") {
        return true;
    } else if (pos === 5 && valor === "cua-der-no") {
        return true;
    } else if (pos === 6 && valor === "fe-rro-ca-rril") {
        return true;
    } else if (pos === 7 && valor === "ga-lli-ne-ro") {
        return true;
    } else if (pos === 8 && valor === "li-cua-do-ra") {
        return true;
    } else if (pos === 9 && valor === "pa-ti-nes") {
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








