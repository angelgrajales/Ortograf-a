
var ejercicios = ['Que tiene vacío el interior<input id="palabra_1" class="in_text border border-success" maxlength="11" disabled/>',
    'Animales que ponen huevos<input id="palabra_2" class="in_text border border-success" maxlength="11" disabled />',
    'Espacio de tiempo en que alguien está sin trabajar.<input id="palabra_3" class="in_text border border-success" maxlength="11" disabled/>',
    'Que tiene forma de óvalo.<input id="palabra_4" class="in_text border border-success" maxlength="11" disabled />',
    'Cada una de las piezas duras que forman el esqueleto de los vertebrados.<input id="palabra_5" class="in_text border border-success" maxlength="11" disabled/>',
    'Espacio que en un cuerpo sólido queda vacío <input id="palabra_6" class="in_text border border-success" maxlength="11" disabled />',
    'Terreno de corta extensión, generalmente cercado de pared, en que se plantan verduras, legumbres y a veces árboles  frutales.<input id="palabra_7" class="in_text border border-success" maxlength="11" />',
    'Asilo de huérfanos.<input id="palabra_8" class="in_text border border-success" maxlength="11" />',
    'Terreno de mayor extensión que el huerto, destinado al cultivo de legumbres y árboles  frutales.<input id="palabra_9" class="in_text border border-success" maxlength="11" />',
    'Dicho de una persona de menor edad, a quien se le han muerto el padre y la madre, o uno de los dos.<input id="palabra_10" class="in_text border border-success" maxlength="11" disabled/>',
    'Cuerpo redondeado, que producen las hembras de las aves o de otras especies animales.<input id="palabra_11" class="in_text border border-success" maxlength="11" disabled/>',
    'Persona que toma parte en una huelga de trabajadores.<input id="palabra_12" class="in_text border border-success" maxlength="11" disabled/>',
    'Lugar donde se hallan huesos.<input id="palabra_13" class="in_text border border-success" maxlength="11" disabled/>',
    'De la naturaleza del hueso.<input id="palabra_14" class="in_text border border-success" maxlength="11" disabled/>'];
        var palabras = ['hueco', 'ovíparo', 'huelga', 'oval', 'hueso', 'oquedad',  'huerto',  'orfanato', 'huerta', 'huérfano', 'huevo', 'huelguista', 'osario', 'óseo'];
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
       'huerto', 'huerta', 'huérfano', 'huevo', 'huelguista', 'osario', 'óseo'
        if (pos === 0 && valor === "hueco"){
return true;
        } else if (pos === 1 && valor === "ovíparo"){
return true;
        } else if (pos === 2 && valor === "huelga"){
return true;
        } else if (pos === 3 && valor === "oval"){
return true;
        } else if (pos === 4 && valor === "hueso"){
return true;
        } else if (pos === 5 && valor === "oquedad"){
return true;
        } else if (pos === 6 && valor === "huerto"){
return true;
        } else if (pos === 7 && valor === "orfanato"){
return true;
        } else if (pos === 8 && valor === "huerta"){
return true;
        } else if (pos === 9 && valor === "huérfano"){
return true;
        }else if (pos === 10 && valor === "huevo"){
return true;
        }else if (pos === 11 && valor === "huelguista"){
return true;
        }else if (pos === 12 && valor === "osario"){
return true;
        }else if (pos === 13 && valor === "óseo"){
return true;
        }
        
        else{
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



