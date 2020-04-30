
var ejercicios = ['Me abrigo con la<input id="palabra_1" class="in_text4 border border-success"/>.', 
    'Levo una <input id="palabra_2" class="in_text4 border border-success" /> muy linda.', 
    'Los <input id="palabra_3" class="in_text4 border border-success"/> eran antiguos reyes de Egipto.',
    'Compre unas <input id="palabra_4" class="in_text4 border border-success"/>obscuras.', 
    'La <input id="palabra_5" class="in_text4 border border-success" /> es un oficio.'];


var palabras = ['bufanda', 'falda',  'faraones', 'gafas', 'alfarería'];


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
    
    while (usados.includes(num)===true) {//Mientras el numero este en la lista
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
    valor = $("#palabra_" + (pos+1)).val();
    valor=valor.toLowerCase();
    

    if (pos === 0 && valor === "bufanda" ) {
        return true;
    } else if (pos === 1 && valor === "falda") {
        return true;
    } else if (pos === 2 && valor === "faraones") {
        return true;
    } else if (pos === 3 && valor === "gafas") {
        return true;
    } else if (pos === 4 && valor === "alfarería") {
        return true;
    }else {
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
function cambia_imagen(){
var ruta = "img/b2_a10_a/img" + (pos+1) + ".png";
        $('#imagen').attr('src', ruta);    
    
}







