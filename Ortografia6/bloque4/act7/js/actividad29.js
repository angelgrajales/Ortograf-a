
var ejercicios = ['<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>eato', '<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />eo', '<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>eneficio',
    'Sor<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />er', 'Prohi<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>ir', 'Inesta<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />le',
    'Her<input id="palabra_7" class="in_text border border-success" maxlength="3" />ir', 'Reci<input id="palabra_8" class="in_text border border-success" maxlength="3" />ir ', 'Ser<input id="palabra_9" class="in_text border border-success" maxlength="3" />ir',
    'Atri<input id="palabra_10" class="in_text border border-success" maxlength="3" disabled/>uir', 'A<input id="palabra_11" class="in_text border border-success" maxlength="3" disabled/>iación', 'Ha<input id="palabra_12" class="in_text border border-success" maxlength="3" disabled/>ilidad', 'Mo<input id="palabra_13" class="in_text border border-success" maxlength="3" disabled/>ilidad',
    'Culpa<input id="palabra_14" class="in_text border border-success" maxlength="3" disabled/>ilidad', 'Ci<input id="palabra_15" class="in_text border border-success" maxlength="3" disabled/>ilidad'];
var palabras = ['Beato', 'Veo', 'Beneficio', 'Sorber', 'Prohibir', 'Insetable', 'Hervir', 'Recibir', 'Servir', 'Atribuir','Aviación','Habilidad','Movilidad','Culpabilidad','Civilidad'];
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

function califica() {
    
   
    for(i=0; i<=ejercicios.length; i++){
        valor = $("#palabra_" + (i+1 )).val();
        valor = valor.toUpperCase ();
        
        if ( valor === palabras[i]) {
        bien(i);
    
    } else {
        mal(i);
    }
    }

    

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
        if (pos === 0 && valor === "B"){
return true;
        } else if (pos === 1 && valor === "V"){
return true;
        } else if (pos === 2 && valor === "B"){
return true;
        } else if (pos === 3 && valor === "b"){
return true;
        } else if (pos === 4 && valor === "b"){
return true;
        } else if (pos === 5 && valor === "b"){
return true;
        } else if (pos === 6 && valor === "v"){
return true;
        } else if (pos === 7 && valor === "b"){
return true;
        } else if (pos === 8 && valor === "v"){
return true;
        } else if (pos === 9 && valor === "b"){
return true;
        } else if (pos === 10 && valor === "v"){
return true;
        } else if (pos === 11 && valor === "b"){
return true;
        } else if (pos === 12 && valor === "v"){
return true;
        } else if (pos === 13 && valor === "b"){
return true;
        } else if (pos === 14 && valor === "v"){
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



