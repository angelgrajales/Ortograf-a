
var ejercicios = ['Pretérito del indicativo del verbo tener (yo) <input id="palabra_1" class="in_text4 border border-success"/>  ', 'Futuro del subjuntivo del verbo estar (él) <input id="palabra_2" class="in_text4 border border-success" /> ', 'Pretérito del subjuntivo del verbo andar (tú)<input id="palabra_3" class="in_text4 border border-success"/> ',
    'Futuro del subjuntivo del verbo andar (nosotros) <input id="palabra_4" class="in_text4 border border-success"/>  ', 'Pretérito del subjuntivo del verbo estar (yo) <input id="palabra_5" class="in_text4 border border-success" /> ',
    'Pretérito del indicativo del verbo tener (él) <input id="palabra_6" class="in_text4 border border-success"/> ', 'Pretérito del subjuntivo del verbo estar (tú) <input id="palabra_7" class="in_text4 border border-success"  /> ', 'Futuro del subjuntivo del verbo andar (ustedes, ellos) <input id="palabra_8" class="in_text4 border border-success" /> ',
'Pretérito del subjuntivo del verbo tener (yo) <input id="palabra_9" class="in_text4 border border-success" /> ','Pretérito del indicativo del verbo estar (él) <input id="palabra_10" class="in_text4 border border-success" /> ','Pretérito del subjuntivo del verbo tener (tú) <input id="palabra_11" class="in_text4 border border-success" />',
' Futuro del subjuntivo del verbo andar (ustedes/ellos) <input id="palabra_12" class="in_text4 border border-success" /> ','Pretérito del indicativo del verbo andar (nosotros) <input id="palabra_13" class="in_text4 border border-success" /> ',' Futuro del subjuntivo del verbo estar (él) <input id="palabra_14" class="in_text4 border border-success" />',
'Pretérito del indicativo del verbo tener (ustedes/ellos) <input id="palabra_15" class="in_text4 border border-success" /> '];
var palabras = ['tuve', 'estuviere', 'anduvieras', 'anduvieramos', 'estuvieras', 'tuvo','estuvieras','anduvieren','tuviera','estuvo','tuvieras','anduvieren','anduvimos','estuviere','tuvieron'];
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
    

    
    if (pos === 0 && valor === "tuve") {
        return true;
    } else if (pos === 1 && valor === "estuviere") {
        return true;
    } else if (pos === 2 && valor === "anduvieras") {
        return true;
    } else if (pos === 3 && valor === "anduvieramos") {
        return true;
    } else if (pos === 4 && valor === "estuviera") {
        return true;
    } else if (pos === 5 && valor === "tuvo") {
        return true;
    }else if (pos === 6 && valor === "estuvieras") {
        return true;
    }else if (pos === 7 && valor === "anduvieren") {
        return true;
    } else if (pos === 8 && valor === "tuviera") {
        return true;
    } else if (pos === 9 && valor === "estuvo") {
        return true;
    } else if (pos === 10 && valor === "tuvieras") {
        return true;
    } else if (pos === 11 && valor === "anduvieren") {
        return true;
    }else if (pos === 12 && valor === "anduvimos") {
        return true;
    }else if (pos === 13 && valor === "estuviere") {
        return true;
    }else if (pos === 14 && valor === "tuvieron") {
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







