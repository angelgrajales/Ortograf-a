
var ejercicios = ['<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>tre', 
    '<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />dina', 
    '<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>día',
    '<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />món', 
    '<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>griento', 
    '<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled/>to', ];
        var palabras = ['sastre', 'sardina', 'sandía', 'salmón', 'sangriento', 'santo'];
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
        if (pos === 0 && valor === "sas"){
return true;
        } else if (pos === 1 && valor === "sar"){
return true;
        } else if (pos === 2 && valor === "san"){
return true;
        } else if (pos === 3 && valor === "sal"){
return true;
        } else if (pos === 4 && valor === "san"){
return true;
        } else if (pos === 5 && valor === "san"){
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
var ruta = "img/b2_a6/img" + (usados.length) + ".png";
        $('#imagen').attr('src', ruta);
}



