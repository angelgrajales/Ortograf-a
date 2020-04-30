
var ejercicios = [' <input id="palabra_1" class="in_text4 border border-success"/> ocico', 'Sal <input id="palabra_2" class="in_text4 border border-success" /> aje', 'Con <input id="palabra_3" class="in_text4 border border-success"/> encer',
    ' <input id="palabra_4" class="in_text4 border border-success"/> ecerro', 'E <input id="palabra_5" class="in_text4 border border-success" /> perimentar',
    '<input id="palabra_6" class="in_text4 border border-success"/> igo', 'Pro <input id="palabra_7" class="in_text4 border border-success"  /> ocar', ' Tora <input id="palabra_8" class="in_text4 border border-success" /> ',
'Pre <input id="palabra_9" class="in_text4 border border-success" /> enir','E <input id="palabra_10" class="in_text4 border border-success" /> cursion',' <input id="palabra_11" class="in_text4 border border-success" /> asura',
'O <input id="palabra_12" class="in_text4 border border-success" /> igeno',' <input id="palabra_13" class="in_text4 border border-success" /> éroe',' Ca <input id="palabra_14" class="in_text4 border border-success" /> le',
' <input id="palabra_15" class="in_text4 border border-success" /> ibracion',' <input id="palabra_16" class="in_text4 border border-success" /> abito',' <input id="palabra_17" class="in_text4 border border-success" /> orrible',
'E <input id="palabra_18" class="in_text4 border border-success" /> primir','A <input id="palabra_19" class="in_text4 border border-success" /> arcar',' <input id="palabra_20" class="in_text4 border border-success" /> orizonte'];
var palabras = ['h', 'v', 'v', 'b', 'x', 'h','v','x','v','x','b','x','h','b','v','h','h','x','b','h'];
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
    

    
    if (pos === 0 && valor === "h") {
        return true;
    } else if (pos === 1 && valor === "v") {
        return true;
    } else if (pos === 2 && valor === "v") {
        return true;
    } else if (pos === 3 && valor === "b") {
        return true;
    } else if (pos === 4 && valor === "x") {
        return true;
    } else if (pos === 5 && valor === "h") {
        return true;
    }else if (pos === 6 && valor === "v") {
        return true;
    }else if (pos === 7 && valor === "x") {
        return true;
    } else if (pos === 8 && valor === "v") {
        return true;
    } else if (pos === 9 && valor === "x") {
        return true;
    } else if (pos === 10 && valor === "b") {
        return true;
    } else if (pos === 11 && valor === "x") {
        return true;
    }else if (pos === 12 && valor === "h") {
        return true;
    }else if (pos === 13 && valor === "b") {
        return true;
    } else if (pos === 14 && valor === "v") {
        return true;
    } else if (pos === 15 && valor === "h") {
        return true;
    }else if (pos === 16 && valor === "h") {
        return true;
    }else if (pos === 17 && valor === "x") {
        return true;
    } else if (pos === 18 && valor === "b") {
        return true;
    } else if (pos === 19 && valor === "h") {
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







