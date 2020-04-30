
var ejercicios = ['<img src="img/b4_a30/ballena.png" alt="ballena" class="img_peqe"/> <br> <br> <input id="palabra_1" class="in_text4 border border-success"/>',
    '<img src="img/b4_a30/tortuga.png" alt="tortuga" class="img_peqe"/>  <br> <br> <input id="palabra_2" class="in_text4 border border-success" />',
    '<img src="img/b4_a30/tiburon.png" alt="tiburon" class="img_peqe"/>  <br> <br> <input id="palabra_3" class="in_text4 border border-success"/>',
    '<img src="img/b4_a30/playa.png" alt="playa" class="img_peqe"/> <br> <br> <input id="palabra_4" class="in_text4 border border-success"/>',
    '<img src="img/b4_a30/caballito.png" alt="caballito" class="img_peqe"/> <br> <br> <input id="palabra_5" class="in_text4 border border-success" />',
    '<img src="img/b4_a30/cangrejo.png" alt="cangrejo" class="img_peqe"/> <br> <br> <input id="palabra_6" class="in_text4 border border-success"/>',
    '<img src="img/b4_a30/estrella.png" alt="estrella" class="img_peqe"/> <br> <br> <input id="palabra_7" class="in_text4 border border-success"  />',
    '<img src="img/b4_a30/mantarraya.png" alt="mantarraya" class="img_peqe"/> <br> <br> <input id="palabra_8" class="in_text4 border border-success"  />',
    '<img src="img/b4_a30/pulpo.png" alt="pulpo" class="img_peqe"/> <br> <br> <input id="palabra_9" class="in_text4 border border-success"  />',
    '<img src="img/b4_a30/coral.png" alt="coral" class="img_peqe"/> <br> <br> <input id="palabra_10" class="in_text4 border border-success"  />'];

var palabras = ['ba-lle-na', 'tor-tu-ga', 'ti-bu-ron', 'pla-ya', 'ca-ba-lli-to', 'can-gre-jo', 'es-tre-lla', 'man-ta-rra-ya', 'pul-po', 'co-ral'];
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


function aleatorio_puro() {
    var numero;
    numero = parseInt(Math.random() * (ejercicios.length));//obtiene un numero aleatorio  
    return numero;
}

function califica() {
    valor = $("#palabra_" + (pos + 1)).val();
    valor = valor.toLowerCase().replace(/\s+/g,'');


    if (pos === 0 && valor === "ba-lle-na") {
        return true;
    } else if (pos === 1 && valor === "tor-tu-ga") {
        return true;
    } else if (pos === 2 && valor === "ti-bu-ron") {
        return true;
    } else if (pos === 3 && valor === "pla-ya") {
        return true;
    } else if (pos === 4 && valor === "ca-ba-lli-to") {
        return true;
    } else if (pos === 5 && valor === "can-gre-jo") {
        return true;
    } else if (pos === 6 && valor === "es-tre-lla") {
        return true;
    } else if (pos === 7 && valor === "man-ta-rra-ya") {
        return true;
    } else if (pos === 8 && valor === "pul-po") {
        return true;
    } else if (pos === 9 && valor === "co-ral") {
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









