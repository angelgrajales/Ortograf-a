
var ejercicios = ['Apo<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>ar', 'Mue<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />e', 'Dis<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>untiva',
    'Ensa<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />ar', 'Plebe<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>o', 'Se <input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />o',
    'Atrope<input id="palabra_7" class="in_text border border-success" maxlength="3" />ar', '<input id="palabra_8" class="in_text border border-success" maxlength="3" />endo ', 'Pro<input id="palabra_9" class="in_text border border-success" maxlength="3" />ecto',
    'Desma<input id="palabra_10" class="in_text border border-success" maxlength="3" disabled/>ar', 'Be<input id="palabra_11" class="in_text border border-success" maxlength="3" disabled/>o', 'Ca<input id="palabra_12" class="in_text border border-success" maxlength="3" disabled/>ejero', 'Senci<input id="palabra_13" class="in_text border border-success" maxlength="3" disabled/>a',
    'Con<input id="palabra_14" class="in_text border border-success" maxlength="3" disabled/>evar', 'Distribu<input id="palabra_15" class="in_text border border-success" maxlength="3" disabled/>es'];
var palabras = ['Apoyar', 'Muelle', 'Disyuntiva', 'Ensayar', 'Plebeyo', 'Sello', 'Atropellar', 'Yendo', 'Proyecto', 'Desmayar', 'Bello', 'Callejero', 'Sencilla', 'Conllevar', 'Distribuyes'];
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
        if (pos === 0 && valor === "y"){
return true;
        } else if (pos === 1 && valor === "ll"){
return true;
        } else if (pos === 2 && valor === "y"){
return true;
        } else if (pos === 3 && valor === "y"){
return true;
        } else if (pos === 4 && valor === "y"){
return true;
        } else if (pos === 5 && valor === "ll"){
return true;
        } else if (pos === 6 && valor === "ll"){
return true;
        } else if (pos === 7 && valor === "y"){
return true;
        } else if (pos === 8 && valor === "y"){
return true;
        } else if (pos === 9 && valor === "y"){
return true;
        } else if (pos === 10 && valor === "ll"){
return true;
        } else if (pos === 11 && valor === "ll"){
return true;
        } else if (pos === 12 && valor === "ll"){
return true;
        } else if (pos === 13 && valor === "ll"){
return true;
        } else if (pos === 14 && valor === "y"){
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



