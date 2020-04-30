
var ejercicios = ['Irma<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/> la niña que estaba ayer en la fiesta vendrá a estudiar con nosotros', 'El museo<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled /> que está en las afueras inauguró una exposición', 'Me pidieron que llevara: globos <input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/> antifaces,gorritos y serpentinas',
    'Ha dejado de llover <input id="palabra_4" class="in_text border border-success" maxlength="3" disabled /> pero aún hace frío para salir sin abrigarse', 'El campeón <input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>derrotado', 'La ventana <input id="palabra_6" class="in_text border border-success" maxlength="3" disabled /> que da al balcón principal tiene un vitral hermoso',
    'Nos equipamos con: cascos<input id="palabra_7" class="in_text border border-success" maxlength="3" /> rodilleras, coderas, guantes y caretas', 'La calle principal <input id="palabra_8" class="in_text border border-success" maxlength="3" /> anegada', 'Mientras voy a comprar el periódico<input id="palabra_9" class="in_text border border-success" maxlength="3" /> puedes preparar el desayuno',
    'El campus tiene: biblioteca<input id="palabra_10" class="in_text border border-success" maxlength="3" disabled/> gimnasio,cafetería y laboratorios'];
var palabras = [];
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
        if (pos === 0 && valor === ","){
return true;
        } else if (pos === 1 && valor === ","){
return true;
        } else if (pos === 2 && valor === ","){
return true;
        } else if (pos === 3 && valor === ","){
return true;
        } else if (pos === 4 && valor === ","){
return true;
        } else if (pos === 5 && valor === ","){
return true;
        } else if (pos === 6 && valor === ","){
return true;
        } else if (pos === 7 && valor === ","){
return true;
        } else if (pos === 8 && valor === ","){
return true;
        } else if (pos === 9 && valor === ","){
return true;
        } else if (pos === 10 && valor === ","){
return true;
        } else if (pos === 11 && valor === ","){
return true;
        } else if (pos === 12 && valor === ","){
return true;
        } else if (pos === 13 && valor === ","){
return true;
        } else if (pos === 14 && valor === ","){
return true;
        } else if (pos === 15 && valor === ","){
return true;
        } else if (pos === 16 && valor === ","){
return true;
        } else if (pos === 17 && valor === ","){
return true;
        } else if (pos === 18 && valor === ","){
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
var ruta = "img/b1_a2/img" + (usados.length) + ".png";
        $('#imagen').attr('src', ruta);
}



