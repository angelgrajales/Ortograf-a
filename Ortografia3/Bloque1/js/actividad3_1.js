var ejercicios = ['calle', 'lluvia', 'muralla', 'caudillo', 'brillante'];
var palabras = ['calle', 'lluvia', 'muralla', 'caudillo', 'brillante'];
var usados = [];
var id_boton = "";
var pos = -1;
var resultado;
$(document).ready(function () {

    $(".in_t1").keyup(function () {
        if (this.value.length === this.maxLength) {
            $(this).next('.in_t1').focus();
        }
    })
    
    $("#otra_palabra").click(function () {       
        escribe_palabra();
    })




    $("#califica").click(function () {        
        resultado = califica();
        if (resultado === true) {
            bien();
        } else {
            mal();
        }
    })
})
function escribe_palabra() {
    pos = aleatorio();
    $("#cont_palabra").empty();
    $('#cont_palabra').html(ejercicios[pos]);
}

function aleatorio() {
    num = parseInt(Math.random() * (ejercicios.length));
    while ($.inArray(num, usados) !== -1) {
        num = parseInt(Math.random() * (ejercicios.length));        
    }

    return num;
}

function califica() {
    var long_palabra=5;
    var palabra_ingresada="";
    var bandera=true;
    for(var i=1; i<=ejercicios.length; i++){
        
        for(var j=1; j<=long_palabra; j++){
            palabra_ingresada+=$("#in_"+i+"_"+j).val();            
        }
        palabra_ingresada=palabra_ingresada.toLowerCase();
        if(palabra_ingresada!=ejercicios[i-1]){
            bandera=false;
            coloreaInputs(i, long_palabra, "#F83939");
        }else{
            coloreaInputs(i, long_palabra, "#7bffa5");
            if(usados.includes(i)===false){
            usados.push(i-1);
        }
        } 
        palabra_ingresada="";
        long_palabra++;
    }
    
    return bandera;
 
}


function bien() {          
    if (usados.length === ejercicios.length) {
        $('#modalExcelente').modal('show');
    } else {
        
        setTimeout('escribe_palabra()', 1500);
    }
}

function mal() {
    setTimeout('escribe_palabra()', 1500);
}



function coloreaInputs(fila, long_inputs, color){
    for(i=1; i<=long_inputs; i++){
        $("#in_"+fila+"_"+i).css("background-color", color);
    }
}


