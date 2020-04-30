
var ejercicios = ['<img src="img/b4_a26/arquero.png" alt="arquero" class="img_peqe"/> <input id="palabra_1" class="in_text4 border border-success"/>',
    '<img src="img/b4_a26/obsequio.png" alt="obsequio" class="img_peqe"/> <input id="palabra_2" class="in_text4 border border-success" />',
    '<img src="img/b4_a26/poquito.png" alt="poquito" class="img_peqe"/> <input id="palabra_3" class="in_text4 border border-success"/>',
    '<img src="img/b4_a26/blanquear.png" alt="blanquear" class="img_peqe"/> <input id="palabra_4" class="in_text4 border border-success"/>',
    '<img src="img/b4_a26/taquiza.png" alt="taquiza" class="img_peqe"/> <input id="palabra_5" class="in_text4 border border-success" />',
    '<img src="img/b4_a26/bosque.png" alt="bosque" class="img_peqe"/> <input id="palabra_6" class="in_text4 border border-success"/>',
    '<img src="img/b4_a26/quieto.png" alt="quieto" class="img_peqe"/> <input id="palabra_7" class="in_text4 border border-success"  />',
    '<img src="img/b4_a26/buque.png" alt="buque" class="img_peqe"/> <input id="palabra_8" class="in_text4 border border-success"  />',
    '<img src="img/b4_a26/mosquito.png" alt="mosquito" class="img_peqe"/> <input id="palabra_9" class="in_text4 border border-success"  />',
    '<img src="img/b4_a26/duque.png" alt="duque" class="img_peqe"/> <input id="palabra_10" class="in_text4 border border-success"  />'];
var palabras = ['arquero', 'obsequio', 'poquito', 'blanquear', 'taquiza', 'bosque', 'quieto', 'buque', 'mosquito', 'duque'];
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
    valor = valor.toLowerCase();



    if (pos === 0 && valor === "arquero") {
        return true;
    } else if (pos === 1 && valor === "obsequio") {
        return true;
    } else if (pos === 2 && valor === "poquito") {
        return true;
    } else if (pos === 3 && valor === "blanquear") {
        return true;
    } else if (pos === 4 && valor === "taquiza") {
        return true;
    } else if (pos === 5 && valor === "bosque") {
        return true;
    } else if (pos === 6 && valor === "quieto") {
        return true;
    } else if (pos === 7 && valor === "buque") {
        return true;
    } else if (pos === 8 && valor === "mosquito") {
        return true;
    } else if (pos === 9 && valor === "duque") {
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









