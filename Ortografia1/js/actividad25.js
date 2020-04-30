
var ejercicios = ['<input id="palabra_1" class="in_text4 border border-success"/>',
    ' <input id="palabra_2" class="in_text4 border border-success"/>',
    '<input id="palabra_3" class="in_text4 border border-success"/>',
    '<input id="palabra_4" class="in_text4 border border-success"/>',
    '<input id="palabra_5" class="in_text4 border border-success"/>',
    '<input id="palabra_6" class="in_text4 border border-success"/>',
    '<input id="palabra_7" class="in_text4 border border-success"/>',
    '<input id="palabra_8" class="in_text4 border border-success"/>',
    '<input id="palabra_9" class="in_text4 border border-success"/>',
    '<input id="palabra_10" class="in_text4 border border-success"/>',
    '<input id="palabra_11" class="in_text4 border border-success"/>',
    '<input id="palabra_12" class="in_text4 border border-success"/>',
    '<input id="palabra_13" class="in_text4 border border-success"/>'];

var palabras = ['co', 'cu', 'ca', 'ca', 'co', 'cu', 'cu', 'co', 'ca', 'ca', 'co', 'cu','cu'];
var usados = [];
var id_boton = "";
var pos = -1;
var resultado;
$(document).ready(function () {

    $("#revisar").click(function () {
        califica();
         
        
    })
})


/*function inicio() {

    escribe_palabra();
  
}

function escribe_palabra() {
    pos = aleatorio();
    $("#cont_palabra").empty();
    $('#cont_palabra').html(ejercicios[pos]);

}

function aleatorio() {
    num = parseInt(pos+1);//obtiene un numero aleatorio

    while (usados.includes(num) === true) {//Mientras el numero este en la lista
        num = parseInt(pos+1);//sigue buscando mas numeros        
    }
    return num;
}*/




function califica() {
    
   
    for(i=0; i<=ejercicios.length; i++){
        valor = $("#palabra_" + (i+1 )).val();
        valor = valor.toLowerCase();
        
        if ( valor === palabras[i]) {
        bien(i);
    
    } else {
        mal(i);
    }
    }

    

}


function bien(pos_in) {
    var id_contenedor = "#palabra_" + (pos_in+1);
    $(id_contenedor).css('background-color', '#7bffa5');
    usados.push(pos_in -1);
    if (usados.length === ejercicios.length) {
        $('#modalExcelente').modal('show');
    } else {
        setTimeout('escribe_palabra()', 1500);
    }
}

function mal(pos_in) {
    var id_contenedor = "#palabra_" + (pos_in+1);
    $(id_contenedor).css('background-color', '#F83939');
}









