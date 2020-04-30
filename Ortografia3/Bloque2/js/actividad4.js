
var ejercicios = ['<img src="img/10.jpg"alt="chayote"/><br><br><input id="palabra_1" class="in_text4 border border-success"/>', '<img src="img/11.jpg"alt="yunta"/> <br><br><input id="palabra_2" class="in_text4 border border-success" /> ', 
    ' <img src="img/2.jpg" alt="maya"/><br><br><input id="palabra_3" class="in_text4 border border-success"/>',
    '<img src="img/3.jpg" alt="buey"/><br><br><input id="palabra_4" class="in_text4 border border-success"/>', '<img src="img/4.jpg"alt="reyes"/><br><br><input id="palabra_5" class="in_text4 border border-success" />',
    '<img src="img/5.jpg"alt="rayo"/> <br><br><input id="palabra_6" class="in_text4 border border-success"/> ', '<img src="img/6.jpg"alt="playa"/> <br><br><input id="palabra_7" class="in_text4 border border-success"  />', 
    '<img src="img/7.jpg"alt="payaso"/> <br><br><input id="palabra_8" class="in_text4 border border-success"  />', '<img src="img/8.jpg"alt="joya"/> <br><br><input id="palabra_9" class="in_text4 border border-success"  />'
, '<img src="img/9.jpg" alt="cuyo"/><br><br> <input id="palabra_10" class="in_text4 border border-success"  />'];
var palabras = ['chayote', 'yunta',  'maya', 'buey', 'reyes', 'rayo', 'playa', 'payaso', 'joya', 'cuyo'];
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




function califica() {
    valor = $("#palabra_" + (pos+1)).val();
    valor=valor.toLowerCase();
    

    
    if (pos === 0 && valor === "chayote") {
        return true;
    } else if (pos === 1 && valor === "yunta") {
        return true;
    } else if (pos === 2 && valor === "maya") {
        return true;
    } else if (pos === 3 && valor === "buey") {
        return true;
    } else if (pos === 4 && valor === "reyes") {
        return true;
    } else if (pos === 5 && valor === "rayo") {
        return true;
    }else if (pos === 6 && valor === "playa") {
        return true;
    }else if (pos === 7 && valor === "payaso") {
        return true;
    }else if (pos === 8 && valor === "joya") {
        return true;
    }else if (pos === 9 && valor === "cuyo") {
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








