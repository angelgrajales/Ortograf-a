
var ejercicios = ['<img src="img/b4_a29/casa.png" alt="casa" class="img_peqe"/> <br> 2 sílabas <input id="palabra_1" class="in_text4 border border-success"/>',
    '<img src="img/b4_a29/manzana.png" alt="manzana" class="img_peqe"/>  <br> 3 sílabas <input id="palabra_2" class="in_text4 border border-success" />',
    '<img src="img/b4_a29/pollito.png" alt="pollito" class="img_peqe"/>  <br> 3 sílabas <input id="palabra_3" class="in_text4 border border-success"/>',
    '<img src="img/b4_a29/castillo.png" alt="castillo" class="img_peqe"/> <br> 3 sílabas <input id="palabra_4" class="in_text4 border border-success"/>',
    '<img src="img/b4_a29/telefono.png" alt="telefono" class="img_peqe"/> <br> 4 sílabas <input id="palabra_5" class="in_text4 border border-success" />',
    '<img src="img/b4_a29/sirena.png" alt="sirena" class="img_peqe"/> <br> 3 sílabas <input id="palabra_6" class="in_text4 border border-success"/>',
    '<img src="img/b4_a29/pirata.png" alt="pirata" class="img_peqe"/> <br> 3 sílabas <input id="palabra_7" class="in_text4 border border-success"  />',
    '<img src="img/b4_a29/abejorro.png" alt="abejorro" class="img_peqe"/> <br> 4 sílabas <input id="palabra_8" class="in_text4 border border-success"  />',
    '<img src="img/b4_a29/librero.png" alt="librero" class="img_peqe"/> <br> 3 sílabas <input id="palabra_9" class="in_text4 border border-success"  />'];
var palabras = ['ca-sa', 'man-za-na', 'po-lli-to', 'cas-ti-llo', 'te-lé-fo-no', 'si-re-na', 'pi-ra-ta', 'a-be-jo-rro', 'li-bre-ro'];
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
    valor = valor.toLowerCase().replace(/\s+/g, '');

    if (pos === 0 && valor === "ca-sa") {
        return true;
    } else if (pos === 1 && valor === "man-za-na") {
        return true;
    } else if (pos === 2 && valor === "po-lli-to") {
        return true;
    } else if (pos === 3 && valor === "cas-ti-llo") {
        return true;
    } else if (pos === 4 && valor === "te-lé-fo-no") {
        return true;
    } else if (pos === 5 && valor === "si-re-na") {
        return true;
    } else if (pos === 6 && valor === "pi-ra-ta") {
        return true;
    } else if (pos === 7 && valor === "a-be-jo-rro") {
        return true;
    } else if (pos === 8 && valor === "li-bre-ro") {
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









