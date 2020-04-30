
var ejercicios = ['<input  id="palabra_1" class="in_text4 border border-success"  value="Montada una pulga sobre la carga que llevaba un camello, presumía que era más que él, porque iba encima"/> <br>', 
    '  <input id="palabra_2" class="in_text4 border border-success" value="después de un rato, por fin saltó al suelo, diciéndole."/> <br> ', 
    '  <input id="palabra_3" class="in_text4 border border-success" value="amigo mío, reconozco que peso muchísimo y, como te tengo lástima, acabo de bajarme"/>  <br> ',
    ' <input id="palabra_4" class="in_text4 border border-success" value="de nada me sirve -respondió el camello- el favor que crees haberme hecho, pues el peso de tu cuerpo no quita ni añade nada, en lo más mínimo, al peso de mi carga"/>  <br> ' 
    ];
var palabras = ['Montada una pulga sobre la carga que llevaba un camello, presumía que era más que él, porque iba encima.',
    'Después de un rato, por fin saltó al suelo, diciéndole.', 
    'Amigo mío, reconozco que peso muchísimo y, como te tengo lástima, acabo de bajarme.',
    'De nada me sirve -respondió el camello- el favor que crees haberme hecho, pues el peso de tu cuerpo no quita ni añade nada, en lo más mínimo, al peso de mi carga.' ];
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
    //valor=valor.toLowerCase();
    valor=valor.toString();

    
    if (pos === 0 && valor === "Montada una pulga sobre la carga que llevaba un camello, presumía que era más que él, porque iba encima.") {
        return true;
    } else if (pos === 1 && valor === "Después de un rato, por fin saltó al suelo, diciéndole.") {
        return true;
    } else if (pos === 2 && valor === "Amigo mío, reconozco que peso muchísimo y, como te tengo lástima, acabo de bajarme.") {
        return true;
    } else if (pos === 3 && valor === "De nada me sirve -respondió el camello- el favor que crees haberme hecho, pues el peso de tu cuerpo no quita ni añade nada, en lo más mínimo, al peso de mi carga.") {
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








