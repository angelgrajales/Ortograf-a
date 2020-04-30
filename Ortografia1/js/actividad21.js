
var ejercicios = ['<img src="img/b3_a21/zorrillo.png" alt="zorrillo" class="img_peqe"/> <br> <input id="palabra_1" class="in_text4 border border-success"/>',
    '<img src="img/b3_a21/lechuza.png" alt="lechuza" class="img_peqe"/> <br> <input id="palabra_2" class="in_text4 border border-success" />',
    '<img src="img/b3_a21/brazo.png" alt="brazo" class="img_peqe"/> <br> <input id="palabra_3" class="in_text4 border border-success"/>',
    '<img src="img/b3_a21/azucar.png" alt="azúcar" class="img_peqe"/> <br> <input id="palabra_4" class="in_text4 border border-success"/>',
    '<img src="img/b3_a21/lanza.png" alt="lanza" class="img_peqe"/> <br> <input id="palabra_5" class="in_text4 border border-success" />',
    '<img src="img/b3_a21/zanahoria.png" alt="zanahoria" class="img_peqe"/> <br> <input id="palabra_6" class="in_text4 border border-success"/>',
    '<img src="img/b3_a21/trenza.png" alt="trenza" class="img_peqe"/> <br> <input id="palabra_7" class="in_text4 border border-success"  />',
    '<img src="img/b3_a21/buzo.png" alt="buzo" class="img_peqe"/> <br> <input id="palabra_8" class="in_text4 border border-success"  />',
    '<img src="img/b3_a21/anzuelo.png" alt="anzuelo" class="img_peqe"/> <br> <input id="palabra_9" class="in_text4 border border-success"  />',
    '<img src="img/b3_a21/azul.png" alt="azul" class="img_peqe"/> <br> <input id="palabra_10" class="in_text4 border border-success"  />'];
var palabras = ['zorrillo', 'lechuza', 'brazo', 'azúcar', 'lanza', 'zanahoria', 'trenza', 'buzo', 'anzuelo', 'azul'];
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



    if (pos === 0 && valor === "zorrillo") {
        return true;
    } else if (pos === 1 && valor === "lechuza") {
        return true;
    } else if (pos === 2 && valor === "brazo") {
        return true;
    } else if (pos === 3 && valor === "azúcar") {
        return true;
    } else if (pos === 4 && valor === "lanza") {
        return true;
    } else if (pos === 5 && valor === "zanahoria") {
        return true;
    } else if (pos === 6 && valor === "trenza") {
        return true;
    } else if (pos === 7 && valor === "buzo") {
        return true;
    } else if (pos === 8 && valor === "anzuelo") {
        return true;
    } else if (pos === 9 && valor === "azul") {
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









