
var ejercicios = ['E<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>tantería', 'E<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />tampa', 'E<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>tenso',
    'E<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />primir', 'E<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>calón', ' E<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />portación',
    'E<input id="palabra_7" class="in_text border border-success" maxlength="3" />caso', 'E<input id="palabra_8" class="in_text border border-success" maxlength="3" />igente ', 'E<input id="palabra_9" class="in_text border border-success" maxlength="3" />plorar',
    'E<input id="palabra_10" class="in_text border border-success" maxlength="3" disabled/>quivar', 'E<input id="palabra_11" class="in_text border border-success" maxlength="3" disabled/>poner', 'E<input id="palabra_12" class="in_text border border-success" maxlength="3" disabled/>tractor', 'E<input id="palabra_13" class="in_text border border-success" maxlength="3" disabled/>trado',
    'E<input id="palabra_14" class="in_text border border-success" maxlength="3" disabled/>pontaneo', 'E<input id="palabra_15" class="in_text border border-success" maxlength="3" disabled/>presión', 'E<input id="palabra_16" class="in_text border border-success" maxlength="3" disabled/>cuchar',
    'E<input id="palabra_17" class="in_text border border-success" maxlength="3" disabled/>agerar', 'E<input id="palabra_18" class="in_text border border-success" maxlength="3" disabled/>tenso', 'E<input id="palabra_19" class="in_text border border-success" maxlength="3" disabled/>cabullir',
    'E<input id="palabra_20" class="in_text border border-success" maxlength="3" disabled/>tratégico'];
var palabras = ['Estantería', 'Estampa', 'Extenso', 'Exprimir', 'Escalón', 'Exportación', 'Escaso', 'Exigente', 'Explorar', 'Esquivar','Exponer','Extractor','Estrado','Espontaneo','Expresión','Escuchar','Exagerar','Extenso','Escabullir','Estratégico'];
        var usados = [];
        var id_boton = "";
        var pos = - 1;
        var resultado;
        $(document).ready(function() {

$(".opcion").click(function(){
id_boton = $(this).attr("id");
        resultado = califica(id_boton);
        if (resultado === true){
bien(id_boton);
        } else{
mal(id_boton);
        }
})
})
        function escribe_palabra(){
        pos = aleatorio();
                $("#cont_palabra").empty();
                $('#cont_palabra').html(ejercicios[pos]);
        }

function aleatorio(){
num = parseInt(Math.random() * (ejercicios.length));
        while ($.inArray(num, usados) !== - 1){
num = parseInt(Math.random() * (ejercicios.length));
        console.log(num);
        }

return num;
}

function califica(boton){
valor = $("#" + boton).text();
        console.log("El valor es: " + valor + " y pos es: " + pos);
        if (pos === 0 && valor === "s"){
return true;
        } else if (pos === 1 && valor === "s"){
return true;
        } else if (pos === 2 && valor === "x"){
return true;
        } else if (pos === 3 && valor === "x"){
return true;
        } else if (pos === 4 && valor === "s"){
return true;
        } else if (pos === 5 && valor === "x"){
return true;
        } else if (pos === 6 && valor === "s"){
return true;
        } else if (pos === 7 && valor === "x"){
return true;
        } else if (pos === 8 && valor === "x"){
return true;
        } else if (pos === 9 && valor === "s"){
return true;
       } else if (pos === 10 && valor === "x"){
return true;
        } else if (pos === 11 && valor === "x"){
return true;
        } else if (pos === 12 && valor === "s"){
return true;
        } else if (pos === 13 && valor === "s"){
return true;
        } else if (pos === 14 && valor === "x"){
return true;
        } else if (pos === 15 && valor === "s"){
return true;
        } else if (pos === 16 && valor === "x"){
return true;
        } else if (pos === 17 && valor === "x"){
return true;
       } else if (pos === 18 && valor === "s"){
return true;
        } else if (pos === 19 && valor === "s"){
return true;
         
            return false;
        }

}


function bien(boton){
var id_contenedor = "#palabra_" + (pos + 1);
        $(id_contenedor).val($("#" + boton).text());
        $(id_contenedor).css('background-color', '#7bffa5');
        usados.push(pos);
        muestra_completa();
        cambia_imagen();
        if (usados.length === ejercicios.length){
$('#modalExcelente').modal('show');
        } else{
setTimeout('escribe_palabra()', 1500);
}
}

function mal(boton){
var id_contenedor = "#palabra_" + (pos + 1);
        $(id_contenedor).val($("#" + boton).text());
        $(id_contenedor).css('background-color', '#F83939');
}

function muestra_completa(){
$('#palabra_completa').css('visibility', 'visible');
        $('#palabra_completa').
        append($('<button>').
                attr("class", "btn btn-light").
                attr("type", "button").
                attr("value", palabras[pos]).
                text(palabras[pos])
                );
}

function cambia_imagen(){
var ruta = "img/b1_a2/img" + (usados.length) + ".png";
        $('#imagen').attr('src', ruta);
}



