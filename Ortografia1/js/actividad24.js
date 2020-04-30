
var ejercicios = ['<img src="img/b4_a24/calceta.png" alt="calceta" class="img_peqe"/> <br> 1.- <input id="palabra_1" class="in_text4 border border-success"/>',
    '<img src="img/b4_a24/cubo.png" alt="cubo" class="img_peqe"/> <br> 2.- <input id="palabra_2" class="in_text4 border border-success" /> ',
    '<img src="img/b4_a24/capa.png" alt="capa" class="img_peqe"/> <br> 3.- <input id="palabra_3" class="in_text4 border border-success"/>',
    '<img src="img/b4_a24/cubeta.png" alt="cubeta" class="img_peqe"/> <br> 4.- <input id="palabra_4" class="in_text4 border border-success"/>',
    '<img src="img/b4_a24/cuadro.png" alt="cuadro" class="img_peqe"/> <br> 5.- <input id="palabra_5" class="in_text4 border border-success" /> ',
    '<img src="img/b4_a24/corbata.png" alt="corbata" class="img_peqe"/> <br> 6.- <input id="palabra_6" class="in_text4 border border-success" />',
    '<img src="img/b4_a24/camisa.png" alt="camisa" class="img_peqe"/> <br> 7.- <input id="palabra_7" class="in_text4 border border-success" />'];


var palabras = ['calceta', 'cubo', 'capa', 'cubeta', 'cuadro'];


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
    
}

function escribe_palabra() {
    pos = aleatorio ();
    $("#cont_palabra").empty();
    $('#cont_palabra').html(ejercicios[pos]);
}

function aleatorio() {
    num = parseInt(pos+1 );//obtiene un numero aleatorio

    while (usados.includes(num) === true) {//Mientras el numero este en la lista
        num = parseInt(pos + 1 );//sigue buscando mas numeros        
    }
    return num;
}



function califica() {
    valor = $("#palabra_" + (pos + 1)).val();
    valor = valor.toLowerCase();


    if (pos === 0 && valor === "calceta") {
        return true;
    } else if (pos === 1 && valor === "cubo") {
        return true;
    } else if (pos === 2 && valor === "capa") {
        return true;
    } else if (pos === 3 && valor === "cubeta") {
        return true;
    } else if (pos === 4 && valor === "cuadro") {
        return true;
    } else if (pos === 5 && valor === "corbata") {
        return true;
    } else if (pos === 6 && valor === "camisa") {
        return true;
    } else {
        return false;
    }

}


function bien() {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).css('background-color', '#7bffa5');
    cambia_imagen();
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


function cambia_imagen() {

    var ruta = "img/b4_a24/img" + (pos + 1) + ".png";
    $('#imagen').attr('src', ruta);
}







