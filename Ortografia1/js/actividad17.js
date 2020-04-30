
var ejercicios = ['ju<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>te', 
    'man<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />to', 
    'man<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>ra',
        'an<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />la', 
        'obli<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>n'];
        var palabras = ['juguete', 'manguito', 'manguera', 'anguila', 'obliguen'];
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
        if (pos === 0 && valor === "gue"){
return true;
        } else if (pos === 1 && valor === "gui"){
return true;
        } else if (pos === 2 && valor === "gue"){
return true;
        } else if (pos === 3 && valor === "gui"){
return true;
        } else if (pos === 4 && valor === "gue"){
return true;
        } else{
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
var ruta = "img/b3_a17/img" + (usados.length) + ".png";
        $('#imagen').attr('src', ruta);
}



